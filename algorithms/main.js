const barsHeight = [];

for(var i=0; i<100; i++){
    var randomNumbers = Math.floor(Math.random()*101);
    barsHeight.push(randomNumbers);
}

function createBars(){
    var barsContainer = document.getElementById('bars-container');
    barsContainer.innerHTML = '';

    for(var i=0; i<100; i++){
        var barHeight = barsHeight[i];
        var bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = barHeight + 'px';
        barsContainer.appendChild(bar);
    }
}

var newbtn = document.getElementById('new-btn');
newbtn.addEventListener('click', function(){
    generateRandomHeights();
    createBars();
});

function generateRandomHeights(){
    barsHeight = [];
    for(var i=0; i<100; i++){
        var randomNumbers = Math.floor(Math.random() * 101);
        barsHeight.push(randomNumbers); 
    }
}
generateRandomHeights();
createBars();
