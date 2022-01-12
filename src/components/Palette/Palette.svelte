<script>
  import { onDestroy } from "svelte";

  import colors from "../../colors.js";
  import {
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
    framebuffer,
    currentColor,
  } from "../../store";

  let currentColor_store = 1;
  let currentColor_unsub = currentColor.subscribe(
    (value) => (currentColor_store = value)
  );
  onDestroy(currentColor_unsub);

  function clearCanvas(col) {
    framebuffer.set(
      [...Array(CANVAS_HEIGHT)].map((i) => ("" + col).repeat(CANVAS_WIDTH))
    );
  }

  function selectColor(col, ev) {
    if (ev.shiftKey) {
      clearCanvas(col);
    } else {
      currentColor.set(col);
    }
  }
</script>

<div class="palette">
  {#each { length: 9 } as _, i}
    <div
      class="swatch"
      style="background-color:{colors[i].css}"
      on:click={(ev) => selectColor(i, ev)}
    />
  {/each}
  <br />
  <div class="label">Pen</div>
  <div
    class="swatch current-color"
    style="background-color:{colors[currentColor_store].css}"
  />
</div>

<style>
  .palette {
    display: inline-block;
    height: 400px;
    background: black;
    color: white;
  }
  .label {
    color: white;
    background: black;
    font-weight: bold;
    text-align: center;
  }
  .swatch {
    width: 32px;
    height: 32px;
    border: 1px solid #333;
    color: white;
  }
</style>
