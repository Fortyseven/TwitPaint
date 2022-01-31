import { writable } from "svelte/store";

export const isMouseDown = writable(false);

export const framebuffer = writable([
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
]);

export const currentColor = writable(1);

export const CANVAS_WIDTH = 8;
export const CANVAS_HEIGHT = 15;
