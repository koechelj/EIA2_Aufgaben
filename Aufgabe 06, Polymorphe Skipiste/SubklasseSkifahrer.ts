

namespace sechsteAufgabe {


    export class Skifahrer extends movingObject {   //movingObject = Name der Superklasse

        //Subklasse erbt die Attribute der Superklasse

        //Attribute
        Kopffarbe: string;
        Koerperfarbe: string;
        Skifarbe: string;



        //Constructor nimmt Attribute entgegen und verarbeitet sie  

        //mit this werden den Koordinaten Werte zugewiesen      
        constructor(x: number, y: number, Kopffarbe: string, Koerperfarbe: string, Skifarbe: string) {
            super(x, y);
            this.Kopffarbe = Kopffarbe;
            this.Koerperfarbe = Koerperfarbe;
            this.Skifarbe = Skifarbe;
        }




        //Methoden: Skifahrer zeichnen und bewegen    
        //Methoden greifen mit this direkt auf Objekteigenschaften zu. Die vererbten Attribute der Superklasse werden mit super gekennzeichnet       
        draw(): void {
            //Kopf
            crc2.beginPath();
            crc2.arc(this.x, this.y, 10, 0, 4 * Math.PI);
            crc2.fillStyle = this.Kopffarbe;
            crc2.fill();
            //Körper
            crc2.fillStyle = this.Koerperfarbe;
            crc2.fillRect(this.x - 8, this.y + 8, 10, 15);
            //Skibretter
            crc2.beginPath();
            crc2.moveTo(this.x - 7, this.y + 21);
            crc2.lineTo(this.x - 7, this.y + 23);
            crc2.lineTo(this.x + 12, this.y + 30);
            crc2.lineTo(this.x + 12, this.y + 28);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = this.Skifarbe;
            crc2.fill();
        }


        move(): void {
            if (this.x > 800)
                this.x = 0;
            this.x += 5; //Geschwindigkeit d. Skifahrers
            this.y += 0.5; //Winkel in dem er nach unten fährt 

            this.draw();
        }

    }
}

