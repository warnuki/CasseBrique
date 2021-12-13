// creation de la classe et exportation
export default class Ball{
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
        console.log("instance de balle crée");
        console.log(x, y, radius, color, angle, speed);

        //propriéte d'instance
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        const a = angle /180.0 * Math.PI;
        this.vector = {x:Math.cos(a), y:Math.sin(a)}
    }

    /**
     * Pour dessiner la balle
     */
    _draw(){

    }

    /**
     * Déplacemenet de la balle
     */
    move(){

    }

    /**
     * Changement de direction de la balle
     */
    ChangeDirection(direction){
        
    }

}