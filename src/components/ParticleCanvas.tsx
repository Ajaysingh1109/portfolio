import { useLayoutEffect, useRef, type RefObject } from "react";
import type { SnapPhase } from "./SnapTransition";
import { ashColor, sampleSurfaces, spread, type Sample, type Viewport } from "../utils/particles";

type Particle = Sample & {
  startX: number;
  startY: number;
  speedX: number;
  speedY: number;
  noise: number;
  size: number;
  delay: number;
  life: number;
  opacity: number;
};

function createParticle(phase: SnapPhase, view: Viewport, index: number, samples: Sample[]): Particle {
  const { width, height } = view;
  const target = samples[Math.floor(Math.random() * samples.length)] ?? { x: spread(0, width), y: spread(0, height), color: ashColor() };
  const edge = Math.min(target.x, width - target.x) / Math.max(1, width / 2);
  const isExit = phase === "disintegrating";
  const slow = index % 5 === 0;
  return {
    ...target,
    color: index % 5 < 3 ? ashColor() : target.color,
    startX: width + spread(-width * .22, width * .46),
    startY: target.y + spread(-height * .33, height * .54),
    speedX: spread(22, slow ? 105 : 210),
    speedY: spread(-135, -25),
    noise: spread(0, 25),
    size: spread(.48, slow ? 3.7 : 1.9),
    delay: isExit
      ? Math.min(1.77, edge * .8 + (target.y / height) * .55 + spread(0, .55))
      : Math.max(0, (target.y / height) * .46 + spread(-.13, .56)),
    life: isExit ? spread(.75, 1.75) : spread(.72, 1.68),
    opacity: spread(.2, 1),
  };
}

function drawParticle(
  context: CanvasRenderingContext2D,
  particle: Particle,
  elapsed: number,
  phase: SnapPhase,
  { width, height }: Viewport,
) {
  const p = particle;
  let x: number;
  let y: number;
  let alpha: number;
  let size = p.size;
  const t = elapsed - p.delay;

  if (phase === "reassembling") {
    if (t < 0 || t > p.life) return;
    const progress = t / p.life;
    const drag = Math.pow(1 - progress, 2.35);
    x = p.x + (p.startX - p.x) * drag + Math.sin(t * 4 + p.noise) * 53 * drag;
    y = p.y + (p.startY - p.y) * drag + Math.cos(t * 5 + p.noise) * 30 * (1 - progress);
    alpha = Math.min(progress * 6, (1 - progress) * 5, 1);
    size *= .62 + drag;
  } else if (phase === "disintegrating") {
    if (t < 0 || t > p.life) return;
    const drag = (1 - Math.exp(-1.12 * t)) / 1.12;
    x = p.x + p.speedX * drag + 62 * t * t + (Math.sin(p.noise + t * 4) - Math.sin(p.noise)) * 15;
    y = p.y + p.speedY * drag - 40 * t * t + (Math.cos(p.noise + t * 5) - Math.cos(p.noise)) * 13;
    alpha = Math.min(t * 12, 1) * Math.pow(1 - t / p.life, 1.6);
    size *= 1 - .38 * t / p.life;
  } else {
    const surge = phase === "flash" ? Math.min(elapsed * 4, 1) * 1.48 : 0;
    x = ((p.x + p.speedX * elapsed * .055) % width) + (p.x - width / 2) * surge;
    y = ((p.y + p.speedY * elapsed * .082) % height + height) % height + (p.y - height / 2) * surge;
    alpha = (.22 + Math.sin(elapsed * .85 + p.noise) * .17) * (1 - surge * .31);
  }

  if (x < -4 || x > width + 4 || y < -4 || y > height + 4) return;
  context.fillStyle = p.color;
  context.globalAlpha = Math.max(0, alpha * p.opacity);
  context.fillRect(x, y, size * (phase === "disintegrating" ? 1.35 : 1), size);
}

export default function ParticleCanvas({ phase, scene }: {
  phase: SnapPhase;
  scene: RefObject<HTMLDivElement | null>;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const element = canvas.current;
    const root = scene.current;
    if (!element || !root) return;
    const context = element.getContext("2d", { alpha: true });
    if (!context) return;

    let view: Viewport;
    let particles: Particle[];
    let frame = 0;
    let resizeFrame = 0;
    let previousPaint = 0;
    let targetFrame = 0;
    const start = performance.now();
    const ambient = phase === "sleeping" || phase === "flash";

    function configure() {
      if (!element || !root || !context) return;
      view = { width: window.innerWidth, height: window.innerHeight };
      const light = view.width < 700 || (navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4);
      const pixelBudget = light ? 1_400_000 : 3_200_000;
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        light ? 1.25 : 1.65,
        Math.sqrt(pixelBudget / (view.width * view.height)),
      );
      const count = ambient ? (light ? 46 : 116) : (light ? 660 : 2680);
      element.width = Math.round(view.width * dpr);
      element.height = Math.round(view.height * dpr);
      element.dataset.particles = String(count);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const surfaces = ambient ? [] : sampleSurfaces(root, view);
      particles = Array.from({ length: count }, (_, index) => createParticle(phase, view, index, surfaces));
      particles.sort((first, second) => first.color.localeCompare(second.color));
      targetFrame = ambient || light ? 1000 / 36 : 0;
    }

    function paint(now: number) {
      frame = requestAnimationFrame(paint);
      if (!context || now - previousPaint < targetFrame) return;
      previousPaint = now;
      context.clearRect(0, 0, view.width, view.height);
      const elapsed = (now - start) / 1000;
      for (const particle of particles) drawParticle(context, particle, elapsed, phase, view);
      context.globalAlpha = 1;
    }

    function resize() {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(configure);
    }

    configure();
    frame = requestAnimationFrame(paint);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", resize);
      context.clearRect(0, 0, view.width, view.height);
    };
  }, [phase, scene]);

  return <canvas ref={canvas} className="particle-canvas" aria-hidden="true" />;
}
