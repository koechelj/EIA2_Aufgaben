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
        //Aufruf konstant platzierte B�ume
        drawTree(680, 80, "green");
        drawTree(150, 380, "green");
        function drawTree(x, y, color) {
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x + 30, y + 5);
            crc2.lineTo(x - 30, y - 5);
            crc2.closePath();
            crc2.strokeStyle = color;
            crc2.stroke();
            crc2.fillStyle = color;
            crc2.fill();
        }
        //B�ume an zuf�lliger Stelle zwischen X 190-700 und Y 200-500 (for Schleife)
        for (let i = 0; i < 8; i++) {
            let x = 190 + Math.random() * 700;
            let y = 520 + Math.random() * 580;
            drawTree(x, y, "green");
        }
    }
})(zweiteAufgabe || (zweiteAufgabe = {}));
//# sourceMappingURL=Functions-Skipiste.js.map