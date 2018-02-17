
namespace Abschlussaufgabe {

    //Superklasse   
    export class AnimiertesObjekt {
        //Attribute
        x: number;
        y: number;


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