//importation
import Ball from "./ball.js";

//Création de l'application pixi
const app = new PIXI.Application({
    width : 1000,
    height : 600,
    backgroundColor : 0x33333,
    antialias : true
});


document.body.appendChild(app.view);

let b = new Ball(100, 100, 20, 0xFFFF3, 215, 20);

window.addEventListener('keydown', (e) =>{
    //fleche gauche
    if(e.keyCode === 37){

    }
    //fleche droite
    else if(e.keyCode === 39){

    }
    // espace
    else if(e.keyCode === 32){

    }
})

window.addEventListener('keyup', (e) =>{
    // fleche gauche
    if(e.keyCode === 37){

    }
    // fleche droite
    else if(e.keyCode === 39){

    }   
})

function gameloop(){
    requestAnimationFrame(gameloop);

    console.log("GameLoop");
}

gameloop();