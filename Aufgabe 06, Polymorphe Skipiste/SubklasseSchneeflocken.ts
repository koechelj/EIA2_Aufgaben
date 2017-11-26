
namespace sechsteAufgabe {


    export class Schneeflocken extends class movingObject {




        //Attribute
        radius: number;
        winkel: number;
        circle: number;
        color: string;


        //Constructor nimmt Attribute entgegen und verarbeitet sie 
        //mit this werden den Koordinaten Werte zugewiesen 
        constructor(x: number, y: number, radius: number, winkel: number, circle: number, color: string) {
            super(x, y);
            this.radius = radius;
            this.winkel = winkel;
            this.circle = circle;
            this.color = color;
        }


        //Update MoveandDrawYourself  
        UpdateSchneeflocken(): void {
            this.draw();
            this.move();
        }


        //Methoden Schneeflocken zeichnen und bewegen
        //Methoden greifen mit this direkt auf Objekteigenschaften zu. Die vererbten Attribute der Superklasse werden mit super gekennzeichnet 
          draw(): void {
            crc2.beginPath();
            crc2.arc(super.x, super.y, this.radius, this.winkel, this.circle * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
        }



        move(): void {
            if (super.y > 600)  //Bereich in dem es schneit
                super.y = 0;
            super.y += 0.6; //Geschwindigkeit d. Schneeflocken
        }
    }
}
