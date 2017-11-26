var sechsteAufgabe;
(function (sechsteAufgabe) {
    //Schneeflocken Klasse (Bauplan f�r Objekt Baum)
    //Export macht Klasse �ber Dateigrenzen hinweg nutzbar, innerhalb des gleichen Namespaces
    class Baum {
        //Constructor nimmt Attribute entgegen und verarbeitet sie
        //mit this werden den Koordinaten Werte zugewiesen
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
        }
        //Update MoveandDrawYourself   
        UpdateBaum() {
            this.drawTree();
        }
        //Methode: Baum zeichnen
        //Methode greift mit this direkt auf Objekteigenschaften zu
        drawTree() {
            sechsteAufgabe.crc2.beginPath();
            sechsteAufgabe.crc2.moveTo(this.x, this.y);
            sechsteAufgabe.crc2.lineTo(this.x + 30, this.y - 60);
            sechsteAufgabe.crc2.lineTo(this.x + 60, this.y);
            sechsteAufgabe.crc2.strokeStyle = this.color;
            sechsteAufgabe.crc2.stroke();
            sechsteAufgabe.crc2.fillStyle = this.color;
            sechsteAufgabe.crc2.fill();
        }
    }
    sechsteAufgabe.Baum = Baum;
})(sechsteAufgabe || (sechsteAufgabe = {}));
//# sourceMappingURL=Baum.js.map