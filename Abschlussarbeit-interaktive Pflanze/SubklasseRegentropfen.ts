
namespace Abschlussaufgabe {


    export class Regentropfen extends AnimiertesObjekt { //extends: Subklassen können damit auf Inhalte der Superklasse zugreifen


        //zusätzliche Attribute der Subklasse:
        radius: number;
        winkel: number;
        circle: number;
        color: string;


        constructor(x: number, y: number, radius: number, winkel: number, circle: number, color: string) {
            super(x, y);
            this.radius = radius;
            this.winkel = winkel;
            this.circle = circle;
            this.color = color;
        }


        //Methoden Regentropfen zeichnen und bewegen (Methoden greifen mit this direkt auf Objekteigenschaften zu) 
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, this.winkel, this.circle * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
        }



        move(): void {
            if (this.y > 600)  //Bereich in dem es regnet
                this.y = 0;
            this.y += 10; //Geschwindigkeit d. Regentropfen
            this.draw();
        }
    }
}

