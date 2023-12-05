async function mergeSort() {
    var bars = document.querySelectorAll('.bar');
    await mergeSortRecursive(bars, 0, bars.length - 1);
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.background = 'green';
    }
}

async function mergeSortRecursive(bars, left, right) {
    if (left < right) {
        var mid = Math.floor((left + right) / 2);

        await mergeSortRecursive(bars, left, mid);
        await mergeSortRecursive(bars, mid + 1, right);

        await merge(bars, left, mid, right);
    }
}

async function merge(bars, left, mid, right) {
    var n1 = mid - left + 1;
    var n2 = right - mid;
    var leftArray = new Array(n1);
    var rightArray = new Array(n2);

    for (var i = 0; i < n1; i++) {
        leftArray[i] = bars[left + i].style.height;
        bars[left + i].style.background = 'red'; 
        await sleep(50);
    }
    for (var j = 0; j < n2; j++) {
        rightArray[j] = bars[mid + 1 + j].style.height;
        bars[mid + 1 + j].style.background = 'red';
        await sleep(50);
    }

    var i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (parseInt(leftArray[i]) <= parseInt(rightArray[j])) {
            bars[k].style.height = leftArray[i];
            i++;
        } else {
            bars[k].style.height = rightArray[j];
            j++;
        }
        k++;
        await sleep(50);
    }

    while (i < n1) {
        bars[k].style.height = leftArray[i];
        i++;
        k++;
        await sleep(50);
    }

    while (j < n2) {
        bars[k].style.height = rightArray[j];
        j++;
        k++;
        await sleep(50);
    }
    for (var x = left; x <= right; x++) {
        bars[x].style.background = '#3498db';
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var sortbtn = document.getElementById("sort-btn");
sortbtn.addEventListener('click', function(){
    var selectedAlgo = document.querySelector("select").value;
    if(selectedAlgo == "merge") mergeSort();
});


window.addEventListener('load', insertionSortVisualization);