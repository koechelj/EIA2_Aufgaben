

namespace Abschlussaufgabe {


    export class Vogel extends AnimiertesObjekt {

        //Subklasse erbt die Attribute der Superklasse

        //Attribute
        kopffarbe: string;
        koerperfarbe: string;
        fluegelfarbe: string;
        schnabelfarbe: string;



        //Constructor nimmt Attribute entgegen und verarbeitet sie  

        //mit this werden den Koordinaten Werte zugewiesen      
        constructor(x: number, y: number, kopffarbe: string, koerperfarbe: string, fluegelfarbe: string, schnabelfarbe: string) {
            super(x, y);
            this.kopffarbe = kopffarbe;
            this.koerperfarbe = koerperfarbe;
            this.fluegelfarbe = fluegelfarbe;
            this.schnabelfarbe = schnabelfarbe;
        }



        //Methoden: Vogel zeichnen und bewegen          
        draw(): void {
            //Körper   
            crc2.beginPath();
            crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = this.koerperfarbe;
            crc2.fill();
            //Kopf 
            crc2.beginPath();
            crc2.arc(this.x + 10, this.y - 10, 8, 0, 2 * Math.PI);
            crc2.fillStyle = this.kopffarbe;
            crc2.fill();
            //Schnabel
            crc2.beginPath();
            crc2.arc(this.x + 19, this.y - 11, 3, 0, 2 * Math.PI);
            crc2.fillStyle = this.schnabelfarbe;
            crc2.fill();
            //Flügel
            crc2.beginPath();
            crc2.arc(this.x - 8, this.y - 10, 6, 0, 2 * Math.PI);
            crc2.fillStyle = this.fluegelfarbe;
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 2, this.y - 5, 6, 0, 2 * Math.PI);
            crc2.fillStyle = this.fluegelfarbe;
            crc2.fill();
        }


        move(): void {
            if (this.x > 800)
                this.x = 0;
            this.x += 5; //Geschwindigkeit d. Vogels
            this.y += 0; //Winkel in dem er fliegt
            this.draw();
        }

    }
}

