var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Vogel extends Abschlussaufgabe.AnimiertesObjekt {
        //Constructor nimmt Attribute entgegen und verarbeitet sie  
        //mit this werden den Koordinaten Werte zugewiesen      
        constructor(x, y, kopffarbe, koerperfarbe, fluegelfarbe, schnabelfarbe) {
            super(x, y);
            this.kopffarbe = kopffarbe;
            this.koerperfarbe = koerperfarbe;
            this.fluegelfarbe = fluegelfarbe;
            this.schnabelfarbe = schnabelfarbe;
        }
        //Methoden: Vogel zeichnen und bewegen          
        draw() {
            //K�rper   
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.koerperfarbe;
            Abschlussaufgabe.crc2.fill();
            //Kopf 
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 10, this.y - 10, 8, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.kopffarbe;
            Abschlussaufgabe.crc2.fill();
            //Schnabel
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 19, this.y - 11, 3, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.schnabelfarbe;
            Abschlussaufgabe.crc2.fill();
            //Fl�gel
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x - 8, this.y - 10, 6, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.fluegelfarbe;
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 2, this.y - 5, 6, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.fluegelfarbe;
            Abschlussaufgabe.crc2.fill();
        }
        move() {
            if (this.x > 800)
                this.x = 0;
            this.x += 5; //Geschwindigkeit d. Vogels
            this.y += 0; //Winkel in dem er fliegt
            this.draw();
        }
    }
    Abschlussaufgabe.Vogel = Vogel;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=SubklasseVoegel.js.map