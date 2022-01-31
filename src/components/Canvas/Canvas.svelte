<script>
    import Cell from "./Cell.svelte";
    import { isMouseDown, framebuffer, currentColor } from "../../store";
    import { onDestroy } from "svelte";

    let framebuffer_store = [];
    let framebufferUnsub = framebuffer.subscribe(
        (value) => (framebuffer_store = value)
    );
    onDestroy(framebufferUnsub);

    let currentColor_store = 1;
    let currentColor_unsub = currentColor.subscribe(
        (value) => (currentColor_store = value)
    );
    onDestroy(currentColor_unsub);

    function setCharAt(str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substring(0, index) + chr + str.substring(index + 1);
    }

    function onInteract(x, y, event) {
        if (event.shiftKey) {
            // use cell color as current pen color
            currentColor.set(framebuffer_store[y][x]);
        } else {
            //otherwise, draw the current pen color
            framebuffer_store[y] = setCharAt(
                framebuffer_store[y],
                x,
                currentColor_store
            );
            framebuffer.set(framebuffer_store);
        }
    }
</script>

<div
    class="canvas-grid"
    on:mousedown={() => isMouseDown.set(true)}
    on:mouseup={() => isMouseDown.set(false)}
>
    {#each framebuffer_store as y, y_index}
        <div class="canvas-row">
            {#each y as x, x_index}
                <Cell x={x_index} y={y_index} color={x} {onInteract} />
            {/each}
        </div>
    {/each}
</div>

<style>
    .canvas-grid {
        background: black;
        font-size: 16pt;
        display: inline-block;
        color: #888;
    }
    .canvas-row {
        margin: 0;
        padding: 0;
        height: var(--pixel-size);
    }
</style>
