const numberOfClicks = document.getElementById('numberOfClicks');
const ClickedButton = document.getElementById('button');
const resetButton = document.getElementById('reset');
const numberOfResets = document.getElementById('numberOfResets');
const restartButton = document.getElementById('restart');
let clicks = 0;
let resets = 0;
ClickedButton.addEventListener('click',()=>{
    clicks++;
    numberOfClicks.textContent = '' + clicks;
    numberOfClicks.style.color = 'goldenrod';
})
resetButton.addEventListener('click',()=>{
    if (numberOfClicks.textContent === '0'){
        alert('Please click the button!');
    }else{
        clicks = 0;
        numberOfClicks.textContent = '' + clicks;
        resets++;
        numberOfResets.textContent = '' + resets;
        numberOfResets.style.color = '#913030';
    }

})
restartButton.addEventListener('click',()=>{
    if (numberOfClicks.textContent ==='0' && numberOfResets.textContent === '0'){
        alert('Please click the button!');
    }else{
        resets = 0;
        clicks = 0;
        numberOfClicks.textContent = '' + clicks;
        numberOfResets.textContent = '' + resets;
    }

})