
namespace fuenfteAufgabe {

    //Schneeflocken Klasse (Bauplan für Objekt Schneeflocken)
    //Export macht Klasse über Dateigrenzen hinweg nutzbar, innerhalb des gleichen Namespaces
    export class Schneeflocken {
        //Attribute
        x: number;
        y: number;
        radius: number;
        winkel: number;
        circle: number;
        color: string;


       //Constructor nimmt Infos entgegen und verarbeitet sie
        //mit this werden den Koordinaten Werte zugewiesen
        constructor(x: number, y: number, radius: number, winkel: number, circle: number, color: string) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.winkel = winkel;
            this.circle = circle;
            this.color = color;
        }


        //Update MoveandDrawYourself  
        UpdateSchneeflocken(): void {
            this.drawSchneeflocken();
            this.moveSchneeflocken();
        }


        //Methoden Schneeflocken zeichnen und bewegen
        drawSchneeflocken(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, this.winkel, this.circle * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
        }



        moveSchneeflocken(): void {
            this.x > 800;  //Bereich in dem es schneit
            this.x = 0;
            this.y += 0.6; //Geschwindigkeit d. Schneeflocken
        }
    }
}