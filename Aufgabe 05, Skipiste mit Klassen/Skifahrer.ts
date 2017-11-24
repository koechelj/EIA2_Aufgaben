
namespace fuenfteAufgabe {

    
    //Skifahrer Klasse (Bauplan für Objekt Skifahrer)
    export class Skifahrer {    //Export macht Klasse über Dateigrenzen hinweg nutzbar, innerhalb des gleichen Namespaces
        //Attribute
        x: number;
        y: number;
        Kopffarbe: string;
        Koerperfarbe: string;
        Skifarbe: string;
        
        

        //Constructor nimmt Attribute entgegen und verarbeitet sie
        
        //mit this werden den Koordinaten Werte zugewiesen
        
        constructor(x: number, y: number, Kopffarbe: string, Koerperfarbe: string, Skifarbe: string) {
            this.x = x;
            this.y = y;
            this.Kopffarbe = Kopffarbe;
            this.Koerperfarbe = Koerperfarbe;
            this.Skifarbe = Skifarbe;
        }

        

        //Update MoveandDrawYourself  
        UpdateSkifahrer(): void {
            this.drawSkifahrer();  //Aufruf
            this.moveSkifahrer();
        }

        

        //Methoden: Skifahrer zeichnen und bewegen
        
        //Methoden greifen mit this direkt auf Objekteigenschaften zu
        
        drawSkifahrer(): void {
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

       
        moveSkifahrer(): void {
            if (this.x > 800)
            this.x = 0;
            this.x += 5; //Geschwindigkeit d. Skifahrers
            this.y += 0.5; //Winkel in dem er nach unten fährt
        }

    }
}