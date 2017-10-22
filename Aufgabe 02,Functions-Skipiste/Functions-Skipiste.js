var zweiteAufgabe;
(function (zweiteAufgabe) {
    window.addEventListener("load", init);
    let crc2;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        //Zeichnung
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Gondel Linie   
        crc2.beginPath();
        crc2.moveTo(0, 50);
        crc2.lineTo(650, 250);
        crc2.stroke();
        //Gondel   
        crc2.fillStyle = "black";
        crc2.fillRect(180, 95, 65, 40);
        //Linie Piste  
        crc2.beginPath();
        crc2.moveTo(50, 300); //Beginne hier den Pfad
        crc2.lineTo(600, 520);
        crc2.stroke(); //Ende des Pfads
        //Baum 
        crc2.beginPath();
        crc2.moveTo(680, 80);
        crc2.lineTo(630, 180);
        crc2.lineTo(730, 180);
        crc2.stroke(); //schlie�e das Dreieck
        crc2.fillStyle = "green";
        crc2.fill();
        //Berg 1
        crc2.beginPath();
        crc2.moveTo(400, 50);
        crc2.lineTo(420, 15);
        crc2.lineTo(440, 50);
        crc2.stroke(); //Ende des Pfads
        //Berg 2
        crc2.beginPath();
        crc2.moveTo(440, 50);
        crc2.lineTo(460, 15);
        crc2.lineTo(480, 50);
        crc2.stroke(); //Ende des Pfads
        //Berg 3
        crc2.beginPath();
        crc2.moveTo(470, 35);
        crc2.lineTo(500, 15);
        crc2.lineTo(520, 50);
        crc2.stroke(); //Ende des Pfads
        //Aufruf konstant platzierte B�ume (Parameter einsetzen)
        drawTree(680, 80, "green");
        drawTree(150, 380, "green");
        //Parameter Funktion
        function drawTree(x, y, color) {
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x + 30, y + 5);
            crc2.lineTo(x - 30, y - 5);
            crc2.strokeStyle = color;
            crc2.stroke();
            crc2.fillStyle = color;
            crc2.fill();
        }
        //B�ume an zuf�lliger Position zwischen X 190-700 und Y 350-500 (for Schleife)
        for (let i = 0; i < 8; i++) {
            let x = 190 + Math.random() * 700; //zuf�llige x und y Werte
            let y = 350 + Math.random() * 500;
            drawTree(x, y, "green");
        }
        //Schneeflocken, die zuf�llig im ganzen Canvas erscheinen (Parameter Funktion)
        function Schneesturm(x, y, radius, winkel, circle, color) {
            crc2.beginPath();
            crc2.arc(x, y, radius, winkel, circle);
            crc2.fillStyle = color;
            crc2.fill();
        }
        //Zeichne Schneeflocken mit Schleife
        for (let i = 0; i < 250; i++) {
            let x = 0 + Math.random() * 790; //x und y Position der Flocken ist zuf�llig, irgendwo im Bereich 600px X 790px
            let y = 0 + Math.random() * 600;
            //Aufruf (Werte f�r Parameter einsetzen)
            Schneesturm(x, y, 5, 0, 5 * Math.PI, "#CEF6F5");
        }
    }
})(zweiteAufgabe || (zweiteAufgabe = {}));
//# sourceMappingURL=Functions-Skipiste.js.map