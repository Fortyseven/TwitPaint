<script>
  /*
🟩 Large Green Square
*/

  export var color = 5;

  const colors = {
    0: "black",
    1: "white",
    2: "green",
    3: "blue",
    4: "brown",
    5: "orange",
    6: "purple",
    7: "red",
    8: "yellow",
  };
</script>

<cell style="background-color:{colors[color]}">&nbsp;</cell>

<style>
  cell {
    color: #333;
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #222;
  }
</style>
