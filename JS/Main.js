//importation
import Ball from "./ball.js";
import Pad from "./Pad.js";
import Brick from "./Brick.js";

//Création de l'application pixi
const app = new PIXI.Application({
    width : 1000,
    height : 600,
    backgroundColor : 0x33333,
    antialias : true
});


document.body.appendChild(app.view);

let b = new Ball(100, 300, 10, 0xFFFFF3, 215, 10);
app.stage.addChild(b);
let p = new Pad(200, 500, 20, 200, 0xFFFFF3, 5);
app.stage.addChild(p);
let test = [];
for(let i = 0; i < 6; i++){
    test[i] = new Brick( 20 +i*100, 20, 20, 60, 0xFF0000);
    app.stage.addChild(test[i]);
} 
window.addEventListener('keydown', (e) =>{
    //fleche gauche
    if(e.keyCode === 37){
        p.sens = -1;
    }
    //fleche droite
    else if(e.keyCode === 39){
        p.sens = 1;
    }
    // espace
    else if(e.keyCode === 32){

    }
})

window.addEventListener('keyup', (e) =>{
    // fleche gauche
    if(e.keyCode === 37 && p.sens === -1){
        p.sens = 0;
    }
    // fleche droite
    else if(e.keyCode === 39 && p.sens === 1){
        p.sens = 0;
    }   
})

function gameloop(){
    requestAnimationFrame(gameloop);

    //console.log("GameLoop");
    b.move();
    p.move();
}

gameloop();