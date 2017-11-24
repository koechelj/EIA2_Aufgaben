var fuenfteAufgabe;
(function (fuenfteAufgabe) {
    window.addEventListener("load", init);
    let i;
    let Background;
    //Array skifahrer vom Typ: Skifahrer
    let skifahrer = [];
    let schneeflocken = [];
    let baum = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        //Zeichnung
        fuenfteAufgabe.crc2 = canvas.getContext("2d");
        console.log(fuenfteAufgabe.crc2);
        //Gondel Linie   
        fuenfteAufgabe.crc2.beginPath();
        fuenfteAufgabe.crc2.moveTo(0, 50);
        fuenfteAufgabe.crc2.lineTo(650, 250);
        fuenfteAufgabe.crc2.stroke();
        //Gondel   
        fuenfteAufgabe.crc2.fillStyle = "black";
        fuenfteAufgabe.crc2.fillRect(180, 95, 65, 40); //Position x,y, Breite, H�he des Rechtecks
        //Piste Linie 
        fuenfteAufgabe.crc2.beginPath();
        fuenfteAufgabe.crc2.moveTo(50, 300); //Beginne hier den Pfad
        fuenfteAufgabe.crc2.lineTo(600, 520);
        fuenfteAufgabe.crc2.stroke(); //Ende des Pfads
        //Berg 1
        fuenfteAufgabe.crc2.beginPath();
        fuenfteAufgabe.crc2.moveTo(400, 50);
        fuenfteAufgabe.crc2.lineTo(420, 15);
        fuenfteAufgabe.crc2.lineTo(440, 50);
        fuenfteAufgabe.crc2.stroke(); //Ende des Pfads
        //Berg 2
        fuenfteAufgabe.crc2.beginPath();
        fuenfteAufgabe.crc2.moveTo(440, 50);
        fuenfteAufgabe.crc2.lineTo(460, 15);
        fuenfteAufgabe.crc2.lineTo(480, 50);
        fuenfteAufgabe.crc2.stroke(); //Ende des Pfads
        //Berg 3
        fuenfteAufgabe.crc2.beginPath();
        fuenfteAufgabe.crc2.moveTo(470, 35);
        fuenfteAufgabe.crc2.lineTo(500, 15);
        fuenfteAufgabe.crc2.lineTo(520, 50);
        fuenfteAufgabe.crc2.stroke(); //Ende des Pfads
        //new: erzeugt die Objekte der Klassen. Hier Werte f�r die Attribute angeben:
        //Schleife B�ume 
        for (i = 0; i < 7; i++) {
            baum[i] = new fuenfteAufgabe.Baum(70 + Math.random() * 620, 450 + Math.random() * 100, "green");
        }
        //Schleife Schneeflocken
        for (i = 0; i < 50; i++) {
            schneeflocken[i] = new fuenfteAufgabe.Schneeflocken(Math.random() * 800, Math.random() * 600, 4, 0, 4 * Math.PI, "#A9F5F2");
        }
        //Schleife Skifahrer
        for (i = 0; i < 1; i++) {
            skifahrer[i] = new fuenfteAufgabe.Skifahrer(0, 180, "hsl(" + Math.random() * 360 + ", 100%, 50%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)");
        }
        //Hintergrund speichern
        Background = fuenfteAufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Aufruf der Animationsfunktion
        animate();
    }
    //Animation des Skifahrers und der Schneeflocken 
    function animate() {
        console.log("Timeout");
        fuenfteAufgabe.crc2.clearRect(0, 0, 800, 600);
        fuenfteAufgabe.crc2.putImageData(Background, 0, 0); //Hintergrund wird restauriert
        //Skifahrer bewegen  
        for (i = 0; i < skifahrer.length; i++) {
            skifahrer[i].moveSkifahrer(); //Skifahrer wird aus skifahrer Array rausgeholt. Die Methode moveSkifahre wird gleichzeitig aufgerufen
            skifahrer[i].drawSkifahrer();
        }
        //Schneeflocken bewegen
        for (i = 0; i < schneeflocken.length; i++) {
            schneeflocken[i].moveSchneeflocken();
            schneeflocken[i].drawSchneeflocken();
        }
        //B�ume zeichnen 
        for (i = 0; i < baum.length; i++) {
            baum[i].drawTree();
        }
        window.setTimeout(animate, 20); //animate() wird alle 20ms aufgerufen
    }
})(fuenfteAufgabe || (fuenfteAufgabe = {}));
//# sourceMappingURL=KlassenSkipiste.js.map