
namespace sechsteAufgabe {

    //Superklasse   
    class movingObject {
        //Attribute
        x: number;
        y: number;


        //Constructor nimmt Attribute entgegen und verarbeitet sie

        //mit this werden den Koordinaten Werte zugewiesen

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }


        //Methoden: in Superklasse leer lassen

        draw(): void {
        }

        move(): void {
        }

    }
}