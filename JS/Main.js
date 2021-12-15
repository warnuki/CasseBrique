//importation
import G from "./G.js";
import Ball from "./ball.js";
import Pad from "./Pad.js";
import Brick from "./Brick.js";

//Création de l'application pixi
const app = new PIXI.Application({
    width : G.wST,
    height : G.hST,
    backgroundColor : 0x33333,
    antialias : true
});


document.body.appendChild(app.view);

let b = new Ball(G.wST * 0.5, G.hST -60, 10, 0xFFFFF3, 215, 10);
app.stage.addChild(b);
let p = new Pad(G.wST * 0.5, G.hST -40, 20, 200, 0xFFFFF3, 5);
app.stage.addChild(p);

let tBrick = [];

for(let i = 0; i < 3; i++){
    for(let j; i < 6; j++){
        const br = new Brick( 20 + i*100, 20, 30,120, 0xFF0000);
        app.stage.addChild(br);
        tBrick.push(br);
    }
}

// function createBricks(nbCols, nbLines,wB, hB, sapceH, spaceV ){
//     const clrs = [0xFF0000, 0xFF8800, 0xFFEE00];
//     const offset = (1000 - nbCols * wB -(nbCols -1) * spaceH) * 0.5;

//     for(let i =0; i<nbLines; i++){
//         for(let j = 0;j < nbCols; j++){

//         }
//     }
// }
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