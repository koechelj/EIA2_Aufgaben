var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Stein {
        constructor(x, y, farbe) {
            this.x = x;
            this.y = y;
            this.farbe = farbe;
        }
        //Update DrawYourself   
        updateStein() {
            this.drawStein();
        }
        //Methode Stein zeichnen
        drawStein() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x - 10, this.y - 10, 2, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.farbe;
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Stein = Stein;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Steine.js.map