
namespace Abschlussaufgabe {



    export class Regenwurm {

        //Attribute
        x: number;
        y: number;
        farbe1: string;
        farbe2: string;


        constructor(x: number, y: number, farbe1: string, farbe2: string) {
            this.x = x;
            this.y = y;
            this.farbe1 = farbe1;
            this.farbe2 = farbe2;
        }


        //Update DrawYourself   
        updateRegenwurm(): void {
            this.drawRegenwurm();
        }


        //Methode Regenwurm zeichnen
        drawRegenwurm(): void {
            //Körper   
            crc2.fillStyle = this.farbe1;
            crc2.fillRect(this.x - 10, this.y - 10, 40, 2);
            //Kopf 
            crc2.beginPath();
            crc2.arc(this.x - 10, this.y - 10, 2.5, 0, 2 * Math.PI);
            crc2.fillStyle = this.farbe2;
            crc2.fill();
        }
    }
}