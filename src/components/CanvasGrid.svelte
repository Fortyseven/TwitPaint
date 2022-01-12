<script>
  import Cell from "./Cell.svelte";

  const CANVAS_WIDTH = 8;
  const CANVAS_HEIGHT = 15;

  const framebuffer = [
    "00000000",
    "77777777",
    "77777777",
    "55555555",
    "55555555",
    "22222222",
    "22220022",
    "88880088",
    "88000000",
    "00000000",
    "00000100",
    "00000000",
    "00000000",
    "00110000",
    "00000000",
  ];
</script>

<div class="canvas-grid">
  {#each framebuffer as y}
    <div class="canvas-row">
      {#each y as x}
        <Cell color={x} />
      {/each}
    </div>
  {/each}
</div>

<style>
  .canvas-grid {
    background: black;
    border: 3px solid #888;
    font-size: 16pt;
    display: inline-block;
    /* font-family: monospace; */
    /* font-family: "Roboto"; */
    color: #888;
    padding: 1rem;
  }
  .canvas-row {
    margin: 0;
    padding: 0;
    height: 16px;
  }
</style>
