function bubbleSortVisualization() {
    async function bubbleSort() {
        var bars = document.querySelectorAll('.bar');
        var n = bars.length;
        var swapped = true;
        while(swapped){
            swapped = false;
            for (var i = 0; i < n - 1; i++) {
                bars[i].style.background = 'red';
                bars[i + 1].style.background = 'red';

                if (parseInt(bars[i].style.height) > parseInt(bars[i + 1].style.height)) {
                    await sleep(50);
                    swap(bars[i], bars[i + 1]);
                    swapped = true;
                }

                bars[i].style.background = '#e1ad01';
                bars[i + 1].style.background = '#e1ad01';
            }
            if(swapped){
                bars[n - 1].style.background = 'green';
                n--;
            }
        }
        for (var i = 0; i < n; i++) {
            if(window.getComputedStyle(bars[i]).backgroundColor != 'green')
                bars[i].style.background = 'green';
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function swap(el1, el2) {
        const transform1 = el1.style.height;
        const transform2 = el2.style.height;
        el1.style.height = transform2;
        el2.style.height = transform1;
    }
    var sortBtn = document.getElementById('sort-btn');
    sortBtn.addEventListener('click', function () {
        let selectedAlgo = document.querySelector('select').value;
        if(selectedAlgo == 'bubble')
            bubbleSort();
    });
}

window.addEventListener('load', bubbleSortVisualization);
