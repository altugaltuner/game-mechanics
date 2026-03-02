import { Application } from "pixi.js";
import type { CreateAppOptions } from "./type";

export async function createApp(
  root: HTMLElement,
  options: CreateAppOptions = {},
): Promise<Application> {
  const app = new Application();
  const deviceResolution = window.devicePixelRatio ?? 1;
  const stableResolution = Math.max(1, Math.round(deviceResolution));

  await app.init({
    antialias: true,
    backgroundColor: options.backgroundColor ?? 0x0b0d12,
    resizeTo: window,
    resolution: stableResolution,
    autoDensity: true,
  });

  app.canvas.style.position = "fixed";
  app.canvas.style.top = "0";
  app.canvas.style.left = "0";
  app.canvas.style.display = "block";

  if (options.mount !== false) {
    root.replaceChildren(app.canvas);
  }

  return app;
}
