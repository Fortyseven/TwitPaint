<script>
    import CanvasGrid from "./components/Canvas/Canvas.svelte";
    import Palette from "./components/Palette/Palette.svelte";
    import Output from "./components/Output/Output.svelte";
    import PenIndicator from "./components/PenIndicator/PenIndicator.svelte";
</script>

<main>
    <div class="container">
        <div class="col left"><CanvasGrid /></div>
        <div class="col right">
            <Palette />
            <PenIndicator />
            <Output />
        </div>
    </div>
</main>

<style>
    :root {
        --pixel-size: 48px;
    }

    main {
        width: 625px;
        margin: auto;
        user-select: none;
    }
    .container {
        display: inline-flex;
        /* flex-direction: column; */
        flex-wrap: nowrap;
    }
    .container > div {
        flex: 1 1 auto;
    }

    .container .right {
        display: flex;
        flex-direction: column;
    }
</style>
