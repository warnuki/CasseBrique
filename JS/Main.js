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
let p = new Pad(G.wST * 0.5, G.hST -40, 20, 200, 0xFFFFF3, 10   );
app.stage.addChild(p);

let tBricks = [];


function createBricks(nbCols, nbLines,wB, hB, spaceH, spaceV, clrs){
    const offset = (G.wST - nbCols * wB -(nbCols -1) * spaceH) * 0.5;

    for(let i = 0; i < nbLines; i++){
        for(let j = 0; j < nbCols; j++){
            const br = new Brick( offset + j * (wB + spaceH), 
            50 + i * (hB + spaceV),
            hB,wB,
            clrs[i],
            (i === 2 && j === 2 ? 'big' : undefined)
            ); 

            app.stage.addChild(br);
            tBricks.push(br);
        }
    }
}
createBricks(6,3,80,30,10,10, [0x00FFCC,0x66FF44,0xFFFF00]);


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

    //Collisions
    //Collisions raquette/balle
    if(G.collide(b,p)){
        const fC = G.faceCollide(b.line, p);
        if(fC !== false){
            b.changeDirection(fC);
        }
    }
    else{
        for(let a = 0; a < tBricks.length; a++){
            if(G.collide(b, tBricks[a])){
                const fC = G.faceCollide(b.line, tBricks[a]);
                if(fC !== false){
                    b.changeDirection(fC);
                    app.stage.removeChild(tBricks[a]);
                    tBricks.splice(a,1); 
                    break;
                }
            }
        }
    }

}

gameloop();