# TwitPaint

TwitPaint is an absurdly simplistic "paint" web app that pops out emoji grids, like this:

```
🟦🟦🟦🟦🟦🟦🟦🟦
🟦⬜🟦🟦🟦⬜⬜⬜
🟦🟦🟦🟦⬜⬜⬜⬜
🟦🟦⬜⬜⬜⬜⬜🟦
🟦🟦🟦🟦🟦🟦🟦🟦
🟦🟦🟦⬜⬜🟦🟦🟦
🟦🟦🟦🟦🟦🟦🟦🟦
🟦🟦🟨🟦🟦🟨🟦🟦
🟦🟦🟦🟦🟦🟦🟦🟦
🟨🟦🟦🟨🟨🟦🟦🟨
🟦🟪🟨🟨🟨🟨🟪🟦
🟪🟧🟧🟧🟧🟧🟧🟪
🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩
```

These are designed for posting to Twitter:

- The grid is just under the maximum post size.
- The width/height is optimized for the narrow, portrait nature of most Twitter UIs.
- The color palette is meant to look similar to what Twitter enforces; other sets of emoji have varying shades of color for their large blocks, so posting these to, say, Mastodon or Facebook will look slightly different.

_This is a work in progress._ It does not currently save, load, or do anything except scribble pixels.

## Keyboard Shortcuts

- Shift-clicking on the canvas selects the color of the pixel under the cursor as the current pen color.

- Shift-clicking on the palette clears the canvas in taht color.

- There is no undo. (Yet.)
