function quickSortVisualiztion(){
    async function quickSort(){
        var bars = document.querySelectorAll("bars");
        var n = bars.length;
    }

    function sleep(ms){
        return new promise ((resolve) => setTimeout(resolve, ms)); 
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
        if(selectedAlgo == "quick") selectionSort();
    });
}