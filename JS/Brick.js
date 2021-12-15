// creation de la classe et exportation
export default class Brick extends PIXI.Graphics{
    //Constructeur
    /** constructeur de la classe Ball
     * 
     * @param {Number} x : position X
     * @param {Number} y : position y 
     * @param {Number} height: hauteur de la barre
     * @param {number} width : largeur de la barre
     * @param {Number} color : couleur de la barre
     * 
     * @example
     * 
     * let l = new Brick(100, 100, 20, 200, 0xFFFF3);
     * app.stage.addChild(l))
     */
    constructor(x, y, h, w, color, bonus = undefined){
        //console.log("instance de pad crée");
        //console.log(x, y, w,h color);

        //invoque le constructeur de la super classe
        super();

        //propriéte d'instance
        this.x = x;
        this.y = y;
        this.color = color;
        this.h = h;
        this.w = w;
        this.bonus = bonus;

        //Appel de la methode pour dessiner la balle
        this._draw();
    }

    /**
     * Pour dessiner la balle
     */
    _draw(){
        this.beginFill(this.color);
        if(this.bonus !== undefined) this.lineStyle(3, 0xFFFFFF)
        this.drawRect( this.w/-2, this.h/-2, this.w, this.h);
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