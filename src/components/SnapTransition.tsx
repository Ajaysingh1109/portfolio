import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import Brand from "./Brand";
import Gauntlet from "./Gauntlet";
import IamAjayOverlay from "./IamAjayOverlay";
import ParticleCanvas from "./ParticleCanvas";
import SnapButton from "./SnapButton";
import { personal } from "../data";

export type SnapPhase = "sleeping" | "flash" | "identity" | "reassembling" | "awake" | "disintegrating";

const phases: Partial<Record<SnapPhase, { duration: number; next: SnapPhase }>> = {
  flash: { duration: 410, next: "identity" },
  identity: { duration: 2200, next: "reassembling" },
  reassembling: { duration: 2400, next: "awake" },
  disintegrating: { duration: 3500, next: "sleeping" },
};

const sectionIds = new Set([
  "#main-content", "#home", "#about", "#skills", "#projects", "#experience",
  "#education", "#certifications", "#contact",
]);
const motionPreference = "(prefers-reduced-motion: reduce)";

function getInitialPhase(): SnapPhase {
  return window.matchMedia(motionPreference).matches || sectionIds.has(window.location.hash)
    ? "awake"
    : "sleeping";
}

export default function SnapTransition({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState(getInitialPhase);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia(motionPreference).matches);
  const phaseRef = useRef(phase);
  const scene = useRef<HTMLDivElement>(null);
  const pendingFocus = useRef<"hero" | "snap" | "skip" | null>(null);
  const anchor = useRef(sectionIds.has(window.location.hash) ? window.location.hash : "");
  const showPortfolio = phase === "reassembling" || phase === "awake" || phase === "disintegrating";
  const showIntro = phase === "sleeping" || phase === "flash";
  const lockPage = phase !== "awake";

  function go(next: SnapPhase) {
    phaseRef.current = next;
    setPhase(next);
  }

  function enter() {
    pendingFocus.current = "hero";
    go("awake");
  }

  function sleep() {
    if (window.location.hash) {
      window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
    }
    anchor.current = "";
    pendingFocus.current = "snap";
    go("sleeping");
  }

  function handleSnap() {
    if (phaseRef.current !== "sleeping") return;
    if (reducedMotion) enter();
    else go("flash");
  }

  function handleExit() {
    if (phaseRef.current !== "awake") return;
    if (reducedMotion) {
      sleep();
    } else {
      window.scrollTo({ top: window.scrollY, behavior: "instant" });
      pendingFocus.current = "skip";
      go("disintegrating");
    }
  }

  useEffect(() => {
    const transition = phases[phase];
    if (!transition) return;
    const timer = window.setTimeout(() => {
      if (phaseRef.current !== phase) return;
      if (transition.next === "awake") enter();
      else if (transition.next === "sleeping") sleep();
      else go(transition.next);
    }, transition.duration);
    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    const preference = window.matchMedia(motionPreference);
    function onPreferenceChange(event: MediaQueryListEvent) {
      setReducedMotion(event.matches);
      if (!event.matches) return;
      if (phaseRef.current === "disintegrating") sleep();
      else if (phaseRef.current !== "awake") enter();
    }
    function onHashChange() {
      const hash = window.location.hash;
      if (!sectionIds.has(hash) || phaseRef.current === "awake") return;
      anchor.current = hash;
      pendingFocus.current = null;
      go("awake");
    }
    preference.addEventListener("change", onPreferenceChange);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      preference.removeEventListener("change", onPreferenceChange);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  useLayoutEffect(() => {
    if (!lockPage) return;
    const page = document.documentElement;
    const previousOverflow = page.style.overflow;
    const previousAnchor = page.style.overflowAnchor;
    page.style.overflow = "hidden";
    page.style.overflowAnchor = "none";
    return () => {
      page.style.overflow = previousOverflow;
      page.style.overflowAnchor = previousAnchor;
    };
  }, [lockPage]);

  useLayoutEffect(() => {
    if (phase !== "reassembling" && phase !== "disintegrating") return;
    const surfaces = [...(scene.current?.querySelectorAll<HTMLElement>("[data-dust]") ?? [])];

    function markVisibleSurfaces() {
      const visible = surfaces.map((surface) => {
        const { top, bottom, left, right } = surface.getBoundingClientRect();
        return bottom > 0 && top < window.innerHeight && right > 0 && left < window.innerWidth;
      });
      surfaces.forEach((surface, index) => surface.toggleAttribute("data-dust-active", visible[index]));
    }

    markVisibleSurfaces();
    window.addEventListener("resize", markVisibleSurfaces);
    return () => {
      window.removeEventListener("resize", markVisibleSurfaces);
      surfaces.forEach((surface) => surface.removeAttribute("data-dust-active"));
    };
  }, [phase]);

  useLayoutEffect(() => {
    if (phase === "sleeping") window.scrollTo({ top: 0, behavior: "instant" });
    const target = pendingFocus.current;
    if (target) {
      pendingFocus.current = null;
      scene.current?.querySelector<HTMLElement>('[data-focus="' + target + '"]')?.focus({ preventScroll: true });
    }
    if (phase === "awake" && anchor.current) {
      const hash = anchor.current;
      anchor.current = "";
      const frame = requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant" }));
      return () => cancelAnimationFrame(frame);
    }
  }, [phase]);

  return (
    <div className="snap-scene" data-phase={phase} ref={scene}>
      {showPortfolio && (
        <div className="portfolio" inert={phase !== "awake"}>
          {children}
        </div>
      )}

      {showIntro && (
        <main className="intro" aria-label={personal.name + " portfolio introduction"}>
          <div className="intro-header">
            <Brand />
            <span className="intro-author">{personal.name} <span>/</span> Portfolio</span>
          </div>
          <div className="intro-light" aria-hidden="true" />
          <div className="intro-visual">
            <Gauntlet onSnap={handleSnap} disabled={phase !== "sleeping"} />
          </div>
          <div className="intro-actions">
            <SnapButton onClick={handleSnap} disabled={phase !== "sleeping"} />
            <h1>One snap. A world of intelligence.</h1>
          </div>
        </main>
      )}

      {!reducedMotion && phase !== "awake" && phase !== "identity" && (
        <ParticleCanvas phase={phase} scene={scene} />
      )}
      {phase === "flash" && <div className="snap-flash" aria-hidden="true" />}
      {phase === "identity" && <IamAjayOverlay />}
      {(phase === "flash" || phase === "disintegrating") && <div className="snap-wave" aria-hidden="true" />}

      {phase !== "awake" && (
        <button
          type="button"
          className="skip-intro"
          data-focus="skip"
          onClick={phase === "disintegrating" ? sleep : enter}
        >
          {phase === "disintegrating" ? "Skip Animation" : "Skip Intro"}
        </button>
      )}
      {phase === "awake" && <SnapButton exit onClick={handleExit} />}
    </div>
  );
}
