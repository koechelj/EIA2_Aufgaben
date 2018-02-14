var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let Background;
    let i;
    //Haupt-Array vom Typ der Superklasse
    let objects = [];
    //weitere Arrays f�r die Objekte Regentropfen und Biene
    let nRegentropfen = 200;
    let biene = [];
    function init(event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        console.log(Abschlussaufgabe.crc2);
        //alert("Hallo, ich bin eine interaktive Pflanze. Lerne mich kennen, indem Du auf die Info Symbole klickst.");
        document.getElementById("Sonne").addEventListener("click", sonneAlert);
        document.getElementById("Sonne").addEventListener("touchstart", sonneAlert);
        document.getElementById("Wolke").addEventListener("click", regnen);
        document.getElementById("Wolke").addEventListener("touchstart", regnen);
        document.getElementById("Bluetenblaetter").addEventListener("click", bluetenblaetterAlert);
        document.getElementById("Bluetenblaetter").addEventListener("touchstart", bluetenblaetterAlert);
        document.getElementById("Blueteninneres").addEventListener("click", blueteninneresAlert);
        document.getElementById("Blueteninneres").addEventListener("touchstart", blueteninneresAlert);
        document.getElementById("Blaetter").addEventListener("click", blaetterAlert);
        document.getElementById("Blaetter").addEventListener("touchstart", blaetterAlert);
        document.getElementById("Staengel").addEventListener("click", staengelAlert);
        document.getElementById("Staengel").addEventListener("touchstart", staengelAlert);
        document.getElementById("Wurzeln").addEventListener("click", wurzelnAlert);
        document.getElementById("Wurzeln").addEventListener("touchstart", wurzelnAlert);
        document.getElementById("Erde").addEventListener("click", erdeAlert);
        document.getElementById("Erde").addEventListener("touchstart", erdeAlert);
        //Pflanze zeichnen:
        //St�ngel
        Abschlussaufgabe.crc2.fillStyle = "#64FE2E";
        Abschlussaufgabe.crc2.fillRect(348, 185, 6, 250);
        //Bl�tenbl�tter
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(300, 150, 32, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "#610B38";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(348, 120, 32, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "#610B38";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(395, 150, 32, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "#610B38";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(370, 200, 32, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "#610B38";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(320, 200, 32, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "#610B38";
        Abschlussaufgabe.crc2.fill();
        //Bl�teninneres
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(347, 165, 23, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "#F7BE81";
        Abschlussaufgabe.crc2.fill();
        //Bl�tter
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(323, 330, 30, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "#64FE2E";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(378, 280, 30, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "#64FE2E";
        Abschlussaufgabe.crc2.fill();
        //Erde
        Abschlussaufgabe.crc2.fillStyle = "#612A0C";
        Abschlussaufgabe.crc2.fillRect(0, 400, 800, 200);
        //Wurzeln
        Abschlussaufgabe.crc2.fillStyle = "#B97944";
        Abschlussaufgabe.crc2.fillRect(349, 400, 3, 80);
        Abschlussaufgabe.crc2.fillStyle = "#B97944";
        Abschlussaufgabe.crc2.fillRect(349, 415, 70, 3);
        Abschlussaufgabe.crc2.fillStyle = "#B97944";
        Abschlussaufgabe.crc2.fillRect(280, 440, 70, 3);
        Abschlussaufgabe.crc2.fillStyle = "#B97944";
        Abschlussaufgabe.crc2.fillRect(380, 416, 3, 45);
        Abschlussaufgabe.crc2.fillStyle = "#B97944";
        Abschlussaufgabe.crc2.fillRect(380, 460, 55, 3);
        Abschlussaufgabe.crc2.fillStyle = "#B97944";
        Abschlussaufgabe.crc2.fillRect(433, 460, 3, 45);
        Abschlussaufgabe.crc2.fillStyle = "#B97944";
        Abschlussaufgabe.crc2.fillRect(280, 440, 3, 60);
        Abschlussaufgabe.crc2.fillStyle = "#B97944";
        Abschlussaufgabe.crc2.fillRect(320, 440, 3, 100);
        Abschlussaufgabe.crc2.fillStyle = "#B97944";
        Abschlussaufgabe.crc2.fillRect(320, 510, 70, 3);
        Abschlussaufgabe.crc2.fillStyle = "#B97944";
        Abschlussaufgabe.crc2.fillRect(260, 500, 40, 3);
        Abschlussaufgabe.crc2.fillStyle = "#B97944";
        Abschlussaufgabe.crc2.fillRect(300, 420, 3, 20);
        //Sonne
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(30, 30, 80, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "yellow";
        Abschlussaufgabe.crc2.fill();
        //Wolke
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(550, 50, 50, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "lightblue";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(590, 60, 60, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "lightblue";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.arc(640, 70, 40, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.fillStyle = "lightblue";
        Abschlussaufgabe.crc2.fill();
        //Bienen erzeugen an random Stellen
        for (i = 0; i < 5; i++) {
            biene[i] = new Abschlussaufgabe.Biene(550 + Math.random() * 220, 250 + Math.random() * 100, "yellow", "silver", "yellow", "black");
        }
        //Hintergrund speichern
        Background = Abschlussaufgabe.crc2.getImageData(0, 0, 800, 600);
        //Aufruf der Animationsfunktion
        animate();
    }
    function sonneAlert() {
        alert("");
    }
    function regnen() {
        //Schleife Regentropfen
        for (i = 0; i < nRegentropfen; i++) {
            let r = new Abschlussaufgabe.Regentropfen(Math.random() * 800, Math.random() * 600, 3, 0, 4 * Math.PI, "#2E9AFE");
            objects.push(r);
        }
        animate();
    }
    //Alert Funktionen
    function bluetenblaetterAlert() {
        alert("");
    }
    function blueteninneresAlert() {
        alert("");
    }
    function blaetterAlert() {
        alert("");
    }
    function staengelAlert() {
        alert("");
    }
    function wurzelnAlert() {
        alert("");
    }
    function erdeAlert() {
        alert("");
    }
    //Animation der Regentropfen 
    function animate() {
        console.log("Timeout");
        Abschlussaufgabe.crc2.clearRect(0, 0, 800, 600);
        Abschlussaufgabe.crc2.putImageData(Background, 0, 0); //Hintergrund wird restauriert
        for (i = 0; i < objects.length; i++) {
            let r = objects[i];
            r.move();
        }
        //Bienen zeichnen 
        for (let i = 0; i < biene.length; i++) {
            biene[i].drawBiene();
        }
        window.setTimeout(animate, 20); //animate() wird alle 20ms aufgerufen
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=interaktivePflanze.js.map