function insertionSortVisualization() {
  async function insertionSort() {
    var bars = document.querySelectorAll(".bar");
    var n = bars.length;

      for (var i = 1; i < n; i++) {
        for (var j = i; j > 0; j--) {
          bars[j].style.background = "red";
          bars[j - 1].style.background = "red";
          if (parseInt(bars[j].style.height) < parseInt(bars[j - 1].style.height)) {
            await sleep(100);
            swap(bars[j], bars[j - 1]);
          } 
            bars[j].style.background = "#e1ad01";
            bars[j - 1].style.background = "#e1ad01";
        }
      }
    for (var i = 0; i < n; i++) {
        await sleep(10);
        bars[i].style.background = "green";
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function swap(el1, el2) {
    const transform1 = el1.style.height;
    const transform2 = el2.style.height;
    el1.style.height = transform2;
    el2.style.height = transform1;
  }

  var sortBtn = document.getElementById("sort-btn");
  sortBtn.addEventListener("click", function () {
    var selectedAlgo = document.querySelector("select").value;
    if (selectedAlgo == "insertion") insertionSort();
  });
}

window.addEventListener('load', insertionSortVisualization);