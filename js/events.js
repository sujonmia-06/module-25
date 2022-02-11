function makeRed(){
    document.body.style.backgroundColor = 'red';
}

const blueBtn = document.getElementById('bluebtn');
blueBtn.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// anonymous function
const greenBtn = document.getElementById('greenbtn');
greenBtn.onclick = function (){
    document.body.style.backgroundColor = 'green';
}


// handle by using even listener
const goldenrodBtn = document.getElementById('goldenrodbtn');
goldenrodBtn.addEventListener('click', makeGoldenrod);

function makeGoldenrod(){
    document.body.style.backgroundColor = 'goldenrod';
}


const hotpinkBtn = document.getElementById('hotpinkbtn');
hotpinkBtn.addEventListener('click', function (){
    document.body.style.backgroundColor = 'hotpink';
})

// direct shortcut
document.getElementById('lightbluebtn').addEventListener('click', function (){
    document.body.style.backgroundColor = 'lightblue'
})