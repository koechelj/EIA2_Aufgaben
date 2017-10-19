var ersteAufgabe;
(function (ersteAufgabe) {
    window.addEventListener("load", init);
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        //Zeichnung
        let crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Gondel Linie   
        crc2.beginPath();
        crc2.moveTo(0, 50);
        crc2.lineTo(650, 250);
        crc2.stroke();
        //Gondel   
        crc2.fillStyle = "black";
        crc2.fillRect(180, 65, 40, 70);
        //Linie 1 Piste  
        crc2.beginPath(); //Starte mit neuem Pfad
        crc2.moveTo(200, 200); //gehe hierhin
        crc2.lineTo(620, 320); //ziehe Linie bis
        crc2.stroke(); //Ende des Pfads
        //Linie 2 Piste  
        crc2.beginPath();
        crc2.moveTo(170, 350);
        crc2.lineTo(600, 520);
        crc2.stroke();
        //Baum 1
        crc2.beginPath();
        crc2.moveTo(150, 380);
        crc2.lineTo(120, 440);
        crc2.lineTo(180, 440);
        crc2.stroke(); //schlie�e das Dreieck
        crc2.fillStyle = "green";
        crc2.fill();
        //Baumstamm 1
        crc2.fillStyle = "maroon";
        crc2.fillRect(130, 440, 30, 50);
        //Baum 2
        crc2.beginPath();
        crc2.moveTo(680, 80);
        crc2.lineTo(650, 140);
        crc2.lineTo(710, 140);
        crc2.stroke(); //schlie�e das Dreieck
        crc2.fillStyle = "green";
        crc2.fill();
        //Baumstamm 2
        crc2.fillStyle = "maroon";
        crc2.fillRect(660, 140, 30, 50);
        //Berg 1
        crc2.beginPath();
        crc2.moveTo(400, 50);
        crc2.lineTo(420, 15);
        crc2.lineTo(440, 50);
        crc2.stroke(); //Ende des Pfads
        crc2.fillStyle = "grey";
        crc2.fill();
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
    }
})(ersteAufgabe || (ersteAufgabe = {}));
//# sourceMappingURL=Skipiste.js.map