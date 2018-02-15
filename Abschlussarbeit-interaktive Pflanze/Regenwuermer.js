var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    //Export macht Klasse �ber Dateigrenzen hinweg nutzbar, innerhalb des gleichen Namespaces
    class Regenwurm {
        constructor(x, y, farbe1, farbe2) {
            this.x = x;
            this.y = y;
            this.farbe1 = farbe1;
            this.farbe2 = farbe2;
        }
        //Update DrawYourself   
        UpdateRegenwurm() {
            this.drawRegenwurm();
        }
        //Methode: Regenwurm zeichnen
        //Methode greift mit this direkt auf Objekteigenschaften zu
        drawRegenwurm() {
            //K�rper   
            Abschlussaufgabe.crc2.fillStyle = this.farbe1;
            Abschlussaufgabe.crc2.fillRect(this.x - 10, this.y - 10, 40, 2);
            //Kopf 
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x - 10, this.y - 10, 2.5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.farbe2;
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Regenwurm = Regenwurm;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Regenwuermer.js.map