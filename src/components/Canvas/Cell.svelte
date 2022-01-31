<script>
    import { onDestroy } from "svelte";

    import colors from "../../colors.js";
    import { isMouseDown } from "../../store";
    export var color = 5;
    export var x;
    export var y;
    export var onInteract = () => {};

    let mouseDownStore = false;

    let mouseDownUnsub = isMouseDown.subscribe(
        (value) => (mouseDownStore = value)
    );
    onDestroy(mouseDownUnsub);

    function doOnInteract(isClick, ev) {
        if (mouseDownStore || isClick) {
            onInteract(x, y, ev);
        }
    }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    class="cell"
    on:mouseover={(ev) => doOnInteract(false, ev)}
    on:mousedown={(ev) => doOnInteract(true, ev)}
    style="background-color:{colors[color].css}"
>
    &nbsp;
</div>

<style>
    div.cell {
        color: #000;
        display: inline-block;
        width: var(--pixel-size);
        height: var(--pixel-size);
        border: 1px solid #111;
        cursor: pointer;
        user-select: none;
    }
</style>
