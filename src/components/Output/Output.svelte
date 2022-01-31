<script>
    import { onDestroy } from "svelte";
    import { framebuffer } from "../../store";
    import colors from "../../colors.js";

    let outputRef;
    let framebuffer_store = [];

    let framebufferUnsub = framebuffer.subscribe(
        (value) => (framebuffer_store = value)
    );

    onDestroy(framebufferUnsub);

    function onClickCopy() {
        if (navigator && navigator.clipboard) {
            navigator.clipboard.writeText(
                outputRef.textContent.replaceAll(" ", "\n")
            );
        }
    }
</script>

<div class="output">
    <div class="label">Output</div>
    <div class="wrapper" on:click={onClickCopy} bind:this={outputRef}>
        {#each framebuffer_store as y, y_index}
            {#each y as x, x_index}
                {colors[x].text}
            {/each}
            <br />
        {/each}
    </div>
</div>

<style>
    .wrapper {
        font-family: monospace;
        height: auto;
        background: rgb(21, 32, 43);
        padding: 1em;
        display: inline-block;
        line-height: 1.38em;
        user-select: text;
    }
    .label {
        color: white;
        background: black;
        font-weight: bold;
        text-align: center;
    }
</style>
