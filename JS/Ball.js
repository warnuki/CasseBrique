import G from "./G.js";

// creation de la classe et exportation
export default class Ball extends PIXI.Graphics{
    //Constructeur
    /** constructeur de la classe Ball
     * 
     * @param {Number} x : position X
     * @param {Number} y : position y 
     * @param {Number} radius: taille de la ball
     * @param {Number} color : couleur de la ball
     * @param {Number} angle : angle de la ball, en degre converti en vecteur
     * @param {Number} speed : vitesse
     * 
     * @example
     * 
     * let b = new Ball(100, 100, 20, 0xFFFF3, 215, 20);
     * app.stage.addChild(b)
     */
    constructor(x, y, radius, color, angle, speed){
        //console.log("instance de balle crée");
        //console.log(x, y, radius, color, angle, speed);

        //invoque le constructeur de la super classe
        super();

        //propriéte d'instance
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        const a = angle /180.0 * Math.PI;
        this.vector = {x:Math.cos(a), y:Math.sin(a)}

        //Appel de la methode pour dessiner la balle
        this._draw();
    }

    /**
     * Pour dessiner la balle
     */
    _draw(){
        this.beginFill(this.color);
        this.drawCircle(0,0, this.radius);
    }

    /**
     * Déplacemenet de la balle
     */
    move(){
        this.x += this.vector.x * this.speed;
        this.y += this.vector.y * this.speed;

        //rebonds
        if(this.x <= this.radius || this.x >= G.wST - this.radius) this.vector.x *= -1;
        if(this.y <= this.radius || this.y >= G.hST - this.radius) this.vector.y *= -1;
    }

    /**
     * Changement de direction de la balle
     */
    changeDirection(direction){
        if(direction === G.FaceCollide.left || direction === G.FaceCollide.right){
            this.vector.x *= -1;
        }
        else if(direction === G.FaceCollide.top || direction === G.FaceCollide.bottom){
            this.vector.y *= -1;
        }
    }

    get line(){
        const currentX = this.x + this.vector.x * this.radius;
        const currentY = this.y + this.vector.y * this.radius;
        const previousX = this.x - this.vector.x * this.speed;
        const previousY = this.y - this.vector.y * this.speed;

        return [
            {x: currentX, y: currentY},
            {x: previousX, y: previousY}
        ]
    }
}