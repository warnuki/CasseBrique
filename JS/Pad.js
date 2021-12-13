// creation de la classe et exportation
export default class Pad extends PIXI.Graphics{
    //Constructeur
    /** constructeur de la classe Ball
     * 
     * @param {Number} x : position X
     * @param {Number} y : position y 
     * @param {Number} height: hauteur de la barre
     * @param {number} width : largeur de la barre
     * @param {Number} color : couleur de la barre
     * @param {Number} speed : vitesse
     * 
     * @example
     * 
     * let p = new Pad(100, 100, 20, 0xFFFF3, 215, 20);
     * app.stage.addChild(p))
     */
    constructor(x, y, h, w, color, speed){
        //console.log("instance de pad crée");
        //console.log(x, y, radius, color, angle, speed);

        //invoque le constructeur de la super classe
        super();

        //propriéte d'instance
        this.x = x;
        this.y = y;
        this.color = color;
        this.h = h;
        this.w = w;
        this.speed = speed;
        this._sens = 0;
        //Appel de la methode pour dessiner la balle
        this._draw();
    }

    /**
     * Pour dessiner la balle
     */
    _draw(){
        this.beginFill(this.color);
        this.drawRect( this.w/-2, this.h/-2, this.w, this.h);
    }

    /**
     * Déplacemenet de la balle
     */
    move(){
        this.x += this.speed * this._sens;
        this.x = Math.max(this.w * 0.5, Math.min(1000 - this.w * 0.5, this.x));
        
    }

    /**
     * Changement de direction de la balle
     */
    ChangeDirection(direction){

    }

    /**
     * Getter/ Seeter pour le sens
     */

     get sens(){
         return this._sens;

     }
     set sens(value){
         if(value < -1 || value > 1) console.warn("Attention valeur invalide");
         this._sens = Math.max( -1, Math.min(1,value));
     }

}