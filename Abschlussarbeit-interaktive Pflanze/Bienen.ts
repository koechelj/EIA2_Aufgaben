
namespace Abschlussaufgabe {


    //Export macht Klasse über Dateigrenzen hinweg nutzbar, innerhalb des gleichen Namespaces
    export class Biene {

        //Attribute
        x: number;
        y: number;
        koerperfarbe: string;
        fluegelfarbe: string;
        kopffarbe: string;
        fuehlerfarbe: string;


        constructor(x: number, y: number, koerperfarbe: string, fluegelfarbe: string, kopffarbe: string, fuehlerfarbe: string) {
            this.x = x;
            this.y = y;
            this.koerperfarbe = koerperfarbe;
            this.fluegelfarbe = fluegelfarbe;
            this.kopffarbe = kopffarbe;
            this.fuehlerfarbe = fuehlerfarbe;
        }


        //Update DrawYourself   
        updateBiene(): void {
            this.drawBiene();
        }


        //Methode Biene zeichnen (Methode greift mit this direkt auf Objekteigenschaften zu)
        drawBiene(): void {
            //Körper   
            crc2.beginPath();
            crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = this.koerperfarbe;
            crc2.fill();
            //Kopf 
            crc2.beginPath();
            crc2.arc(this.x - 10, this.y - 10, 8, 0, 2 * Math.PI);
            crc2.fillStyle = this.kopffarbe;
            crc2.fill();
            //Fühler
            crc2.fillStyle = this.fuehlerfarbe;
            crc2.fillRect(this.x - 6, this.y - 27, 2, 12);
            crc2.fillStyle = this.fuehlerfarbe;
            crc2.fillRect(this.x - 14, this.y - 27, 2, 12);
            crc2.beginPath();
            crc2.arc(this.x - 7, this.y - 27, 2.5, 0, 2 * Math.PI);
            crc2.fillStyle = this.fuehlerfarbe;
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 15, this.y - 27, 2.5, 0, 2 * Math.PI);
            crc2.fillStyle = this.fuehlerfarbe;
            crc2.fill();
            //Flügel
            crc2.beginPath();
            crc2.arc(this.x + 8, this.y - 12, 6, 0, 2 * Math.PI);
            crc2.fillStyle = this.fluegelfarbe;
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 2, this.y - 7, 6, 0, 2 * Math.PI);
            crc2.fillStyle = this.fluegelfarbe;
            crc2.fill();
        }
    }
}