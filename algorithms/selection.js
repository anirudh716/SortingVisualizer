function selectionSortVisualization(){
    async function selectionSort(){
        var bars = document.querySelectorAll(".bar");
        var n = bars.length;
        for(var i=0; i<n; i++){
            var minIndex = i;
            for(var j=i+1; j<n; j++){
                if(parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height))
                    minIndex = j;
            }
            bars[i].style.background = "red";
            bars[minIndex].style.background = "blue";
            await sleep(50);
            swap(bars[i], bars[minIndex]);
            bars[i].style.background = '#e1ad01';
            bars[minIndex].style.background = '#e1ad01';
        }
        for (var i = 0; i < n; i++) {
            await sleep(10);
            bars[i].style.background = "green";
        }
    }

    function sleep(ms){
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function swap(el1, el2){
        const transform1 = el1.style.height;
        const transform2 = el2.style.height;
        el1.style.height = transform2;
        el2.style.height = transform1;
    }

    var sortbtn = document.getElementById("sort-btn");
    sortbtn.addEventListener('click', function(){
        var selectedAlgo = document.querySelector("select").value;
        if(selectedAlgo == "selection") selectionSort();
    });
}
window.addEventListener('load', selectionSortVisualization);

