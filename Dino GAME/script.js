let dino = document.getElementById('dino');
let cactus = document.getElementById('cactus');

function jump(){
    if(dino.classList != "jump"){
    dino.classList.add('jump');
    setTimeout(function () {
        dino.classList.remove('jump');
    }, 300)
}
}
setInterval(function() {
    let dinoTop = parseFloat(window.getComputedStyle(dino).getPropertyValue("top"));
    // console.log(dinoTop);

    let cactusLeft = parseFloat(window.getComputedStyle(cactus).getPropertyValue("left"));
    // console.log(cactusLeft);

    if(dinoTop>= 150 && cactusLeft>0 && cactusLeft <=50){
        alert('GAME OVER')
    }

}, 10)

document.addEventListener('keydown',jump);