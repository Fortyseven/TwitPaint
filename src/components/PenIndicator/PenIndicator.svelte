<script>
    import { currentColor } from "../../store";
    import colors from "../../colors.js";
</script>

<div class="wrapper">
    <div class="label">Current Color</div>
    <div
        class="swatch current-color"
        style="background-color:{colors[$currentColor].css}"
    />
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        flex: auto;
    }
    .label {
        color: white;
        background: black;
        font-weight: bold;
        text-align: center;
    }
    .current-color {
        height: 100%;
    }
</style>
