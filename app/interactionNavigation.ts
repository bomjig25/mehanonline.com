import type { KeyboardEvent, RefObject } from "react";

const rangeKeys = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"]);

export function revealResult(
  target: RefObject<HTMLElement | null>,
  block: ScrollLogicalPosition = "center",
) {
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const element = target.current;
    if (!element) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block, inline: "nearest" });
  }));
}

export function revealRangeResult(
  event: KeyboardEvent<HTMLInputElement>,
  target: RefObject<HTMLElement | null>,
  block: ScrollLogicalPosition = "center",
) {
  if (rangeKeys.has(event.key)) revealResult(target, block);
}
