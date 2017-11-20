
namespace fuenfteAufgabe {

    //Schneeflocken Klasse (Bauplan für Objekt Baum)
    //Export macht Klasse über Dateigrenzen hinweg nutzbar, innerhalb des gleichen Namespaces
    export class Baum {
        //Attribute
        x: number;
        y: number;
        color: string;


        //Constructor nimmt Infos entgegen und verarbeitet sie
        //this verweist auf die Eigenschaften und Methoden des Objekts
        constructor(x: number, y: number, color: string) {
            this.x = x;
            this.y = y;
            this.color = color;
        }


        //Update MoveandDrawYourself   
        UpdateBaum(): void {
       this.drawTree();
        }


        //Methode Baum zeichnen
        drawTree(): void {
           crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 30, this.y - 60);
            crc2.lineTo(this.x + 60, this.y);
            crc2.strokeStyle = this.color;
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();
        }
    }
}