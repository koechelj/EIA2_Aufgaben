
namespace Abschlussaufgabe {


    export class Stein {

        //Attribute
        x: number;
        y: number;
        farbe: string;


        constructor(x: number, y: number, farbe: string) {
            this.x = x;
            this.y = y;
            this.farbe = farbe;
        }


        //Update DrawYourself   
        updateStein(): void {
            this.drawStein();
        }


        //Methode Stein zeichnen
        drawStein(): void {
            crc2.beginPath();
            crc2.arc(this.x - 10, this.y - 10, 2, 0, 2 * Math.PI);
            crc2.fillStyle = this.farbe;
            crc2.fill();
        }
    }
}