var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init); //alles in init soll gleich zu beginn erscheinen
    let Background;
    let i;
    //Haupt-Array vom Typ der Superklasse
    let objects = [];
    //weitere Arrays f�r die Objekte Regentropfen, Vogel, Biene, Regenwurm, Stein
    let nRegentropfen = 400;
    let nVoegel = 4;
    let biene = [];
    let regenwurm = [];
    let stein = [];
    function init(event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        console.log(Abschlussaufgabe.crc2);
        document.getElementById("Sonne").addEventListener("click", sonneAlert);
        document.getElementById("Sonne").addEventListener("touchstart", sonneAlert);
        document.getElementById("Wolke").addEventListener("click", letitRain);
        document.getElementById("Wolke").addEventListener("touchstart", letitRain);
        document.getElementById("Bluetenblaetter").addEventListener("click", bluetenblaetterAlert);
        document.getElementById("Bluetenblaetter").addEventListener("touchstart", bluetenblaetterAlert);
        document.getElementById("Bluetenkern").addEventListener("click", bluetenkernAlert);
        document.getElementById("Bluetenkern").addEventListener("touchstart", bluetenkernAlert);
        document.getElementById("Blaetter").addEventListener("click", blaetterAlert);
        document.getElementById("Blaetter").addEventListener("touchstart", blaetterAlert);
        document.getElementById("Staengel").addEventListener("click", staengelAlert);
        document.getElementById("Staengel").addEventListener("touchstart", staengelAlert);
        document.getElementById("Wurzeln").addEventListener("click", wurzelnAlert);
        document.getElementById("Wurzeln").addEventListener("touchstart", wurzelnAlert);
        document.getElementById("Erde").addEventListener("click", createWurm);
        document.getElementById("Erde").addEventListener("touchstart", createWurm);
        document.getElementById("Bienennest").addEventListener("click", nestAlert);
        document.getElementById("Bienennest").addEventListener("touchstart", nestAlert);
        //-------Pflanze und Co zeichnen-------------------------------------
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
        Abschlussaufgabe.crc2.moveTo(5, 50);
        Abschlussaufgabe.crc2.lineTo(15, 150);
        Abschlussaufgabe.crc2.lineTo(19, 145);
        Abschlussaufgabe.crc2.strokeStyle = "yellow";
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "yellow";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(60, 30);
        Abschlussaufgabe.crc2.lineTo(70, 150);
        Abschlussaufgabe.crc2.lineTo(74, 145);
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "yellow";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(90, 40);
        Abschlussaufgabe.crc2.lineTo(150, 80);
        Abschlussaufgabe.crc2.lineTo(154, 75);
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "yellow";
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.moveTo(90, 5);
        Abschlussaufgabe.crc2.lineTo(175, 20);
        Abschlussaufgabe.crc2.lineTo(180, 15);
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.fillStyle = "yellow";
        Abschlussaufgabe.crc2.fill();
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
        //Hintergrund speichern
        Background = Abschlussaufgabe.crc2.getImageData(0, 0, 800, 600);
        //random Bienen erzeugen:
        for (i = 0; i < 5; i++) {
            biene[i] = new Abschlussaufgabe.Biene(550 + Math.random() * 220, 230 + Math.random() * 100, "yellow", "silver", "yellow", "black");
        }
        //random Steine erzeugen:
        for (i = 0; i < 60; i++) {
            stein[i] = new Abschlussaufgabe.Stein(20 + Math.random() * 780, 415 + Math.random() * 175, "black");
        }
        //random V�gel erzeugen
        for (i = 0; i < nVoegel; i++) {
            let v = new Abschlussaufgabe.Vogel(0 + Math.random() * 200, 100 + Math.random() * 130, "green", "green", "grey", "orange");
            objects.push(v);
        }
        //Bienen zeichnen 
        for (let i = 0; i < biene.length; i++) {
            biene[i].drawBiene();
        }
        //Steine zeichnen
        for (let i = 0; i < stein.length; i++) {
            stein[i].drawStein();
        }
    } //Ende init  
    //random Regenw�rmer erzeugen, nachdem auf Icon geklickt wurde:
    function createWurm() {
        for (let i = 0; i < regenwurm.length; i++) {
            regenwurm[i].drawRegenwurm();
        }
        for (i = 0; i < 15; i++) {
            regenwurm[i] = new Abschlussaufgabe.Regenwurm(120 + Math.random() * 600, 420 + Math.random() * 200, "#D76767", "#D76767");
        }
    }
    //random Regentropfen erzeugen, nachdem auf Icon geklickt wurde:
    function letitRain() {
        for (i = 0; i < nRegentropfen; i++) {
            let r = new Abschlussaufgabe.Regentropfen(Math.random() * 800, Math.random() * 600, 2.5, 0, 4 * Math.PI, "#2E9AFE");
            objects.push(r);
        }
        animate();
    }
    //Infobox Funktionen
    function sonneAlert() {
        alert("Ich spende der Pflanze Energie, die sie fuer die Photosynthese benoetigt.");
    }
    function blaetterAlert() {
        alert("Wir Blaetter betreiben Photosynthese in unseren Chloroplasten. Hierfuer benoetigen wir Wasser, Sonnenenergie und CO2, welches wir aus der Luft aufnehmen. Als Gegenleistung stellen wir Sauerstoff und Traubenzucker her.");
    }
    function bluetenkernAlert() {
        alert("Ich bin der Bluetenkern. Ich produziere Pollen und Nektar.");
    }
    function bluetenblaetterAlert() {
        alert("Wir Bluetenblaetter schuetzen das Blueteninnere und locken durch unsere Farbe Insekten an.");
    }
    function staengelAlert() {
        alert("Ich bin der Staengel. Ich transportiere Naehrstoffe und Wasser und bringe die Bluete naeher ans Licht.");
    }
    function wurzelnAlert() {
        alert("Wir Wurzeln nehmen Wasser und Naehrstoffe aus unserer Umgebung auf und versorgen die Pflanze damit.");
        alert("Ausserdem verhindern wir, dass die Pflanze umfaellt.");
    }
    function nestAlert() {
        alert("Wir Bienen sammeln Bluetenstaub und Nektar. Wir ernaehren uns davon und wandeln den Nektar in Honig um. Ausserdem bestaeuben wir andere Blueten, indem wir den Bluetenstaub verteilen.");
        alert("Bei Regenwetter verstecken wir uns im Bienenstock.");
    }
    //--------Animation der Regentropfen und V�gel----------------- 
    function animate() {
        console.log("Timeout");
        Abschlussaufgabe.crc2.clearRect(0, 0, 800, 600);
        Abschlussaufgabe.crc2.putImageData(Background, 0, 0); //Hintergrund wird restauriert
        for (i = 0; i < objects.length; i++) {
            let o = objects[i];
            o.move();
        }
        window.setTimeout(animate, 20); //animate() wird alle 20ms aufgerufen
        //Steine zeichnen (diese sollen immer da bleiben)
        for (let i = 0; i < stein.length; i++) {
            stein[i].drawStein();
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=interaktivePflanze.js.map