async function quickSort() {
  var bars = document.querySelectorAll(".bar");
  await sort(0, bars.length - 1);
  // Set background color of sorted bars to green
  for (var i = 0; i < bars.length; i++) {
    bars[i].style.background = "green";
  }
}

async function sort(low, high) {
  if (low < high) {
    var pi = await partition(low, high);

    // Recursively sort elements before and after the partition index
    await sort(low, pi - 1);
    await sort(pi + 1, high);
  }
}

async function partition(low, high) {
  var bars = document.querySelectorAll(".bar");
  var pivot = parseInt(bars[high].style.height);
  var i = low - 1;

  for (var j = low; j <= high - 1; j++) {
    bars[j].style.background = "red";

    if (parseInt(bars[j].style.height) < pivot) {
      i++;
      await sleep(50);
      swap(bars[i], bars[j]);
    }

    // Reset background color after comparison
    bars[j].style.background = "#3498db";
  }

  // Swap the pivot element with the element at (i + 1) position
  await sleep(50);
  swap(bars[i + 1], bars[high]);

  // Reset background color after swapping
  bars[i + 1].style.background = "#3498db";

  return i + 1;
}

function swap(el1, el2) {
  const transform1 = el1.style.height;
  const transform2 = el2.style.height;
  el1.style.height = transform2;
  el2.style.height = transform1;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

var sortbtn = document.getElementById("sort-btn");
sortbtn.addEventListener("click", function () {
  var selectedAlgo = document.querySelector("select").value;
  if (selectedAlgo == "quick") quickSort();
});

window.addEventListener("load", insertionSortVisualization);
