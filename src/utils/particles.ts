export type Sample = { x: number; y: number; color: string };
export type Viewport = { width: number; height: number };

const ashColors = ["#edca83", "#ab8559", "#f2dba6", "#6b6868", "#aa9b8a", "#f9efdb"];
export const spread = (min: number, max: number) => min + Math.random() * (max - min);
export const ashColor = () => ashColors[Math.floor(Math.random() * ashColors.length)];

export function sampleSurfaces(scene: HTMLElement, { width, height }: Viewport): Sample[] {
  const scale = Math.min(1, 880 / width, 1000 / height);
  const surface = document.createElement("canvas");
  surface.width = Math.max(1, Math.floor(width * scale));
  surface.height = Math.max(1, Math.floor(height * scale));
  const context = surface.getContext("2d", { willReadFrequently: true });
  if (!context) return [];
  context.scale(scale, scale);
  const elements = scene.querySelectorAll<HTMLElement>("[data-dust]");

  for (const element of elements) {
    const { left, top, right, bottom, width: w, height: h } = element.getBoundingClientRect();
    if (right <= 0 || left >= width || bottom <= 0 || top >= height || w < 2 || h < 2) continue;

    const type = element.dataset.dust;
    if (type === "text") {
      const style = window.getComputedStyle(element);
      context.fillStyle = "#ecd29c";
      context.font = style.fontWeight + " " + style.fontSize + " " + style.fontFamily;
      context.textBaseline = "middle";
      context.fillText(element.textContent?.trim() ?? "", left, top + h * .52, w);
    } else if (type === "portrait") {
      const image = element.querySelector("img");
      context.save();
      context.beginPath();
      context.ellipse(left + w / 2, top + h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
      context.clip();
      if (image?.complete && image.naturalWidth) {
        const ratio = Math.max(w / image.naturalWidth, h / image.naturalHeight);
        const iw = image.naturalWidth * ratio;
        const ih = image.naturalHeight * ratio;
        context.drawImage(image, left + (w - iw) / 2, top + (h - ih) / 2, iw, ih);
      } else {
        context.fillStyle = "#5b5041";
        context.fillRect(left, top, w, h);
      }
      context.restore();
    } else {
      context.beginPath();
      context.roundRect(left + 1, top + 1, w - 2, h - 2, Math.min(12, h / 2));
      context.fillStyle = "rgba(119, 98, 61, .39)";
      context.fill();
      context.strokeStyle = "#ccab6f";
      context.lineWidth = 1.8;
      context.stroke();
    }
  }

  const samples: Sample[] = [];
  const pixels = context.getImageData(0, 0, surface.width, surface.height).data;
  for (let y = 0; y < surface.height; y += 3) {
    for (let x = 0; x < surface.width; x += 3) {
      const offset = (y * surface.width + x) * 4;
      if (pixels[offset + 3] < 72) continue;
      samples.push({
        x: x / scale,
        y: y / scale,
        color: `rgb(${pixels[offset]},${pixels[offset + 1]},${pixels[offset + 2]})`,
      });
    }
  }
  return samples;
}
