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
            [...Array(CANVAS_HEIGHT)].map((i) =>
                ("" + col).repeat(CANVAS_WIDTH)
            )
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
</div>

<style>
    .palette {
        display: grid;
        height: 25%;
        background: black;
        color: white;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .swatch {
        /* width: 32px;
    height: 32px; */
        border: 1px solid #333;
        color: white;
    }
</style>
