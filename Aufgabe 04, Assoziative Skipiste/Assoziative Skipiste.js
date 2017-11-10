var vierteAufgabe;
(function (vierteAufgabe) {
    window.addEventListener("load", init);
    let crc2;
    //Array f�r Skifahrer
    let Fahrer = [];
    //Array f�r Schneeflocken
    let arraySchneeX = [];
    let arraySchneeY = [];
    let Background;
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
        crc2.fillRect(180, 95, 65, 40); //Position x,y, Breite, H�he des Rechtecks
        //Piste Linie 
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
        //Aufruf konstant platzierte B�ume (Parameter einsetzen)
        drawTree(680, 80, "green");
        drawTree(150, 380, "green");
        //B�ume an zuf�lliger Position 
        for (let i = 0; i < 7; i++) {
            let x = 70 + Math.random() * 620; //zuf�llige x und y Werte
            let y = 450 + Math.random() * 100;
            //Aufruf der drawTree Funktion
            drawTree(x, y, "green");
        }
        //Schnee an zuf�lliger Position
        for (let i = 0; i < 50; i++) {
            arraySchneeX[i] = 800 * Math.random();
            arraySchneeY[i] = 600 * Math.random();
        }
        //Skifahrer
        for (let i = 0; i < 1; i++) {
            Fahrer[i] = {
                x: 0,
                y: 180,
                Kopffarbe: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
                Koerperfarbe: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
                Skifarbe: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
            };
        }
        //Hintergrund speichern
        Background = crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Aufruf der Animationsfunktion
        animate();
    }
    //Parameter Funktion f�r zuf�llige B�ume
    function drawTree(x, y, color) {
        crc2.beginPath();
        crc2.moveTo(x, y); //Position x und y sind variabel
        crc2.lineTo(x + 30, y - 60);
        crc2.lineTo(x + 60, y);
        crc2.strokeStyle = color;
        crc2.stroke();
        crc2.fillStyle = color;
        crc2.fill();
    }
    //Schneeflocken zeichnen
    function Schneeflocken(x, y, radius, winkel, circle, color) {
        crc2.beginPath();
        crc2.arc(x, y, 4, 0, 4 * Math.PI);
        crc2.fillStyle = color;
        crc2.fill();
    }
    //erster Skifahrer zeichnen (Angaben aus dem Interface SkifahrerInfo einsetzen)
    function ersterSkifahrer(Info) {
        //Kopf
        crc2.beginPath();
        crc2.arc(Info.x, Info.y, 10, 0, 4 * Math.PI);
        crc2.fillStyle = Info.Kopffarbe;
        crc2.fill();
        //K�rper
        crc2.fillStyle = Info.Koerperfarbe;
        crc2.fillRect(Info.x - 8, Info.y + 8, 10, 15);
        //Skibretter
        crc2.beginPath();
        crc2.moveTo(Info.x - 7, Info.y + 21);
        crc2.lineTo(Info.x - 7, Info.y + 23);
        crc2.lineTo(Info.x + 12, Info.y + 30);
        crc2.lineTo(Info.x + 12, Info.y + 28);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = Info.Skifarbe;
        crc2.fill();
    }
    //zweiter Skifahrer zeichnen (Angaben aus dem Interface SkifahrerInfo einsetzen)
    function zweiterSkifahrer(Info) {
        //Kopf
        crc2.beginPath();
        crc2.arc(Info.x, Info.y, 10, 0, 4 * Math.PI);
        crc2.fillStyle = Info.Kopffarbe;
        crc2.fill();
        //K�rper
        crc2.fillStyle = Info.Koerperfarbe;
        crc2.fillRect(Info.x - 8, Info.y + 8, 10, 15);
        //Skibretter
        crc2.beginPath();
        crc2.moveTo(Info.x - 7, Info.y + 21);
        crc2.lineTo(Info.x - 7, Info.y + 23);
        crc2.lineTo(Info.x + 12, Info.y + 30);
        crc2.lineTo(Info.x + 12, Info.y + 28);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = Info.Skifarbe;
        crc2.fill();
    }
    //Animation des Skifahrers und der Schneeflocken (Bewegungsmuster hier angeben)
    function animate() {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(Background, 0, 0); //Hintergrund wird restauriert
        //Skifahrer Bewegungsmuster
        for (let i = 0; i < Fahrer.length; i++) {
            if (Fahrer[i].x > 800) {
                Fahrer[i].x = 0;
                Fahrer[i].y = 180;
                Fahrer[i].Kopffarbe = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                Fahrer[i].Koerperfarbe = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
                Fahrer[i].Skifarbe = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            //x und y Wert einer Skala
            Fahrer[i].x += 4; //Geschwindigkeit des Skifahrers
            Fahrer[i].y += 0.8; //Winkel in dem er nach unten f�hrt
            ersterSkifahrer(Fahrer[i]); //Aufruf
            zweiterSkifahrer(Fahrer[i]);
        }
        //Schneeflocken Bewegungsmuster
        for (let i = 0; i < arraySchneeY.length; i++) {
            if (arraySchneeX[i] > 800) {
                arraySchneeX[i] = 0;
            }
            arraySchneeY[i] += 0.6; //Geschwindigkeit der Flocken
            Schneeflocken(arraySchneeX[i], arraySchneeY[i], 5, 0, 5 * Math.PI, "#A9F5F2"); //Aufruf
        }
        window.setTimeout(animate, 20);
    }
})(vierteAufgabe || (vierteAufgabe = {}));
//# sourceMappingURL=Assoziative Skipiste.js.map