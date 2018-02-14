var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    //Export macht Klasse �ber Dateigrenzen hinweg nutzbar, innerhalb des gleichen Namespaces
    class Biene {
        constructor(x, y, koerperfarbe, fluegelfarbe, kopffarbe, fuehlerfarbe) {
            this.x = x;
            this.y = y;
            this.koerperfarbe = koerperfarbe;
            this.fluegelfarbe = fluegelfarbe;
            this.kopffarbe = kopffarbe;
            this.fuehlerfarbe = fuehlerfarbe;
        }
        //Update DrawYourself   
        UpdateBiene() {
            this.drawBiene();
        }
        //Methode: Biene zeichnen
        //Methode greift mit this direkt auf Objekteigenschaften zu
        drawBiene() {
            //K�rper   
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.koerperfarbe;
            Abschlussaufgabe.crc2.fill();
            //Kopf 
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x - 10, this.y - 10, 8, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.kopffarbe;
            Abschlussaufgabe.crc2.fill();
            //F�hler
            Abschlussaufgabe.crc2.fillStyle = this.fuehlerfarbe;
            Abschlussaufgabe.crc2.fillRect(this.x - 6, this.y - 27, 2, 12);
            Abschlussaufgabe.crc2.fillStyle = this.fuehlerfarbe;
            Abschlussaufgabe.crc2.fillRect(this.x - 14, this.y - 27, 2, 12);
            //Fl�gel
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 8, this.y - 12, 6, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.fluegelfarbe;
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x - 2, this.y - 7, 6, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.fluegelfarbe;
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Biene = Biene;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Bienen.js.map