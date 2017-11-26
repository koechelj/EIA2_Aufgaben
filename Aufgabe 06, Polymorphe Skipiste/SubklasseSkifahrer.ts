
namespace sechsteAufgabe {


    export class Skifahrer extends class movingObject {



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



        //Update MoveandDrawYourself  
        UpdateSkifahrer(): void {
            this.draw();  //Aufruf
            this.move();
        }



        //Methoden: Skifahrer zeichnen und bewegen    
        //Methoden greifen mit this direkt auf Objekteigenschaften zu. Die vererbten Attribute der Superklasse werden mit super gekennzeichnet       
        draw(): void {
            //Kopf
            crc2.beginPath();
            crc2.arc(super.x, super.y, 10, 0, 4 * Math.PI);
            crc2.fillStyle = this.Kopffarbe;
            crc2.fill();
            //Körper
            crc2.fillStyle = this.Koerperfarbe;
            crc2.fillRect(super.x - 8, super.y + 8, 10, 15);
            //Skibretter
            crc2.beginPath();
            crc2.moveTo(super.x - 7, super.y + 21);
            crc2.lineTo(super.x - 7, super.y + 23);
            crc2.lineTo(super.x + 12, super.y + 30);
            crc2.lineTo(super.x + 12, super.y + 28);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = this.Skifarbe;
            crc2.fill();
        }


        move(): void {
            if (super.x > 800)
                super.x = 0;
            super.x += 5; //Geschwindigkeit d. Skifahrers
            super.y += 0.5; //Winkel in dem er nach unten fährt
        }

    }
}

