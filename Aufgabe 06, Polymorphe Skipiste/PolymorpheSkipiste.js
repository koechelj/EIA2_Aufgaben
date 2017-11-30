var sechsteAufgabe;
(function (sechsteAufgabe) {
    window.addEventListener("load", init);
    let Background;
    let i;
    //Haupt-Array vom Typ der Superklasse
    let objects = [];
    //weitere Arrays f�r die Objekte
    let nskifahrer = 2;
    let nschneeflocken = 50;
    let baum = [];
    function init(event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        //Zeichnung
        sechsteAufgabe.crc2 = canvas.getContext("2d");
        console.log(sechsteAufgabe.crc2);
        //Gondel Linie   
        sechsteAufgabe.crc2.beginPath();
        sechsteAufgabe.crc2.moveTo(0, 50);
        sechsteAufgabe.crc2.lineTo(650, 250);
        sechsteAufgabe.crc2.stroke();
        //Gondel   
        sechsteAufgabe.crc2.fillStyle = "black";
        sechsteAufgabe.crc2.fillRect(180, 95, 65, 40); //Position x,y, Breite, H�he des Rechtecks
        //Piste Linie 
        sechsteAufgabe.crc2.beginPath();
        sechsteAufgabe.crc2.moveTo(50, 300); //Beginne hier den Pfad
        sechsteAufgabe.crc2.lineTo(600, 520);
        sechsteAufgabe.crc2.stroke(); //Ende des Pfads
        //Berg 1
        sechsteAufgabe.crc2.beginPath();
        sechsteAufgabe.crc2.moveTo(400, 50);
        sechsteAufgabe.crc2.lineTo(420, 15);
        sechsteAufgabe.crc2.lineTo(440, 50);
        sechsteAufgabe.crc2.stroke(); //Ende des Pfads
        //Berg 2
        sechsteAufgabe.crc2.beginPath();
        sechsteAufgabe.crc2.moveTo(440, 50);
        sechsteAufgabe.crc2.lineTo(460, 15);
        sechsteAufgabe.crc2.lineTo(480, 50);
        sechsteAufgabe.crc2.stroke(); //Ende des Pfads
        //Berg 3
        sechsteAufgabe.crc2.beginPath();
        sechsteAufgabe.crc2.moveTo(470, 35);
        sechsteAufgabe.crc2.lineTo(500, 15);
        sechsteAufgabe.crc2.lineTo(520, 50);
        sechsteAufgabe.crc2.stroke(); //Ende des Pfads
        //new: erzeugt die Objekte der Klassen. Hier Werte f�r die Attribute angeben:
        //Schleife B�ume 
        for (i = 0; i < 7; i++) {
            baum[i] = new sechsteAufgabe.Baum(70 + Math.random() * 620, 450 + Math.random() * 100, "green");
        }
        //Schleife Skifahrer
        for (i = 0; i < nskifahrer; i++) {
            let s = new sechsteAufgabe.Skifahrer(0, 180, "hsl(" + Math.random() * 360 + ", 100%, 50%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            objects.push(s);
        }
        //Schleife Schneeflocken
        for (i = 0; i < nschneeflocken; i++) {
            let s = new sechsteAufgabe.Schneeflocken(Math.random() * 800, Math.random() * 600, 4, 0, 4 * Math.PI, "#A9F5F2");
            objects.push(s);
        }
        //Hintergrund speichern
        Background = sechsteAufgabe.crc2.getImageData(0, 0, 800, 600);
        //Aufruf der Animationsfunktion
        animate();
    }
    //Animation des Skifahrers und der Schneeflocken 
    function animate() {
        console.log("Timeout");
        sechsteAufgabe.crc2.clearRect(0, 0, 800, 600);
        sechsteAufgabe.crc2.putImageData(Background, 0, 0); //Hintergrund wird restauriert
        for (i = 0; i < objects.length; i++) {
            let s = objects[i];
            s.move();
        }
        //B�ume zeichnen 
        for (let i = 0; i < baum.length; i++) {
            baum[i].drawTree(); //Kurzversion: es wird auf das baum Array zugegriffen und gleichzeitig wird die drawTree function angeh�ngt.
        }
        window.setTimeout(animate, 20); //animate() wird alle 20ms aufgerufen
    }
})(sechsteAufgabe || (sechsteAufgabe = {}));
//# sourceMappingURL=PolymorpheSkipiste.js.map