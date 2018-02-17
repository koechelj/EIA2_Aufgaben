namespace Abschlussaufgabe {

    window.addEventListener("load", init); //alles in init soll gleich zu beginn erscheinen

    export let crc2: CanvasRenderingContext2D;  //Export: crc2 über Dateigrenze hinweg nutzbar


    let Background: ImageData;
    let i: number;

    //Haupt-Array vom Typ der Superklasse
    let objects: AnimiertesObjekt[] = [];
    //weitere Arrays für die Objekte Regentropfen, Biene, Regenwurm, Stein
    let nRegentropfen: number = 400;
    let biene: Biene[] = [];
    let regenwurm: Regenwurm[] = [];
    let stein: Stein[] = [];




    function init(event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

      

        document.getElementById("Sonne").addEventListener("click", sonneAlert);
        document.getElementById("Sonne").addEventListener("touchstart", sonneAlert);
        document.getElementById("Wolke").addEventListener("click", regnen);
        document.getElementById("Wolke").addEventListener("touchstart", regnen);
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
        document.getElementById("Erde").addEventListener("click", drawWurm);
        document.getElementById("Erde").addEventListener("touchstart", drawWurm);
        document.getElementById("Bienennest").addEventListener("click", nestAlert);
        document.getElementById("Bienennest").addEventListener("touchstart", nestAlert);


        
        
        //-------Pflanze und Co zeichnen-------------------------------------
        //Stängel
        crc2.fillStyle = "#64FE2E";
        crc2.fillRect(348, 185, 6, 250);
        //Blütenblätter
        crc2.beginPath();
        crc2.arc(300, 150, 32, 0, 2 * Math.PI);
        crc2.fillStyle = "#610B38";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(348, 120, 32, 0, 2 * Math.PI);
        crc2.fillStyle = "#610B38";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(395, 150, 32, 0, 2 * Math.PI);
        crc2.fillStyle = "#610B38";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(370, 200, 32, 0, 2 * Math.PI);
        crc2.fillStyle = "#610B38";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(320, 200, 32, 0, 2 * Math.PI);
        crc2.fillStyle = "#610B38";
        crc2.fill();
        //Blüteninneres
        crc2.beginPath();
        crc2.arc(347, 165, 23, 0, 2 * Math.PI);
        crc2.fillStyle = "#F7BE81";
        crc2.fill();
        //Blätter
        crc2.beginPath();
        crc2.arc(323, 330, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#64FE2E";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(378, 280, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#64FE2E";
        crc2.fill();
        //Erde
        crc2.fillStyle = "#612A0C";
        crc2.fillRect(0, 400, 800, 200);
        //Wurzeln
        crc2.fillStyle = "#B97944";
        crc2.fillRect(349, 400, 3, 80);
        crc2.fillStyle = "#B97944";
        crc2.fillRect(349, 415, 70, 3);
        crc2.fillStyle = "#B97944";
        crc2.fillRect(280, 440, 70, 3);
        crc2.fillStyle = "#B97944";
        crc2.fillRect(380, 416, 3, 45);
        crc2.fillStyle = "#B97944";
        crc2.fillRect(380, 460, 55, 3);
        crc2.fillStyle = "#B97944";
        crc2.fillRect(433, 460, 3, 45);
        crc2.fillStyle = "#B97944";
        crc2.fillRect(280, 440, 3, 60);
        crc2.fillStyle = "#B97944";
        crc2.fillRect(320, 440, 3, 100);
        crc2.fillStyle = "#B97944";
        crc2.fillRect(320, 510, 70, 3);
        crc2.fillStyle = "#B97944";
        crc2.fillRect(260, 500, 40, 3);
        crc2.fillStyle = "#B97944";
        crc2.fillRect(300, 420, 3, 20);
        //Sonne
        crc2.beginPath();
        crc2.moveTo(5, 50);
        crc2.lineTo(15, 150);
        crc2.lineTo(19, 145);
        crc2.stroke();
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(60, 30);
        crc2.lineTo(70, 150);
        crc2.lineTo(74, 145);
        crc2.stroke();
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(90, 40);
        crc2.lineTo(150, 80 );
        crc2.lineTo(154, 75 );
        crc2.stroke();
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(90, 5);
        crc2.lineTo(175, 20);
        crc2.lineTo(180, 15);
        crc2.stroke();
        crc2.fillStyle = "yellow";
        crc2.fill();
        
        
        
        
        crc2.beginPath();
        crc2.arc(30, 30, 80, 0, 2 * Math.PI);
        crc2.fillStyle = "yellow";
        crc2.fill();
        
        
        //Wolke
        crc2.beginPath();
        crc2.arc(550, 50, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "lightblue";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(590, 60, 60, 0, 2 * Math.PI);
        crc2.fillStyle = "lightblue";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(640, 70, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "lightblue";
        crc2.fill();



        //Hintergrund speichern
        Background = crc2.getImageData(0, 0, 800, 600);



        //random Bienen erzeugen:
        for (i = 0; i < 5; i++) {
            biene[i] = new Biene(550 + Math.random() * 220, 250 + Math.random() * 100, "yellow", "silver", "yellow", "black");
        }

        //random Steine erzeugen:
        for (i = 0; i < 60; i++) {
            stein[i] = new Stein(20 + Math.random() * 780, 415 + Math.random() * 175, "black");
        }


        //random Regenwürmer erzeugen, nachdem auf Icon geklickt wurde:
        function drawWurm(): void {
            for (let i: number = 0; i < regenwurm.length; i++) {
                regenwurm[i].drawRegenwurm();
            }
            for (i = 0; i < 15; i++) {
                regenwurm[i] = new Regenwurm(120 + Math.random() * 600, 420 + Math.random() * 200, "#D76767", "#D76767");
            }

        }

        //random Regentropfen erzeugen, nachdem auf Icon geklickt wurde:
        function regnen(): void {
            for (i = 0; i < nRegentropfen; i++) {
                let r: Regentropfen = new Regentropfen(Math.random() * 800, Math.random() * 600, 2.5, 0, 4 * Math.PI, "#2E9AFE");
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



        //Bienen zeichnen 
        for (let i: number = 0; i < biene.length; i++) {
            biene[i].drawBiene();
        }

        //Steine zeichnen
        for (let i: number = 0; i < stein.length; i++) {
            stein[i].drawStein();
        }



        //--------Animation der Regentropfen----------------- 
        function animate(): void {
            console.log("Timeout");
            crc2.clearRect(0, 0, 800, 600);
            crc2.putImageData(Background, 0, 0); //Hintergrund wird restauriert

            for (i = 0; i < objects.length; i++) {
                let o: AnimiertesObjekt = objects[i];
                o.move();
            }

            window.setTimeout(animate, 20); //animate() wird alle 20ms aufgerufen

            //Steine zeichnen (diese sollen bei Regenwetter da bleiben)
            for (let i: number = 0; i < stein.length; i++) {
                stein[i].drawStein();
            }
        }

    }//Ende init

}