namespace Abschlussaufgabe {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;  //Export: crc2 über Dateigrenze hinweg nutzbar


    let Background: ImageData;
    let i: number;

    //Haupt-Array vom Typ der Superklasse
    let objects: AnimiertesObjekt[] = [];

    //weitere Arrays für die Objekte Regentropfen, Biene, Regenwurm
    let nRegentropfen: number = 400;
    let biene: Biene[] = [];
    let regenwurm: Regenwurm[] = [];





    function init(event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);


        //alert("Hallo, ich bin eine interaktive Pflanze. Lerne mich kennen, indem Du auf die Info Symbole klickst.");

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

        //Pflanze zeichnen:
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



        //Bienen an random Stellen:
        for (i = 0; i < 5; i++) {
            biene[i] = new Biene(550 + Math.random() * 220, 250 + Math.random() * 100, "yellow", "silver", "yellow", "black");
        }


        //Regenwürmer an random Stellen, nachdem auf Info-Image geklickt wurde:
        function drawWurm(): void {
            for (let i: number = 0; i < regenwurm.length; i++) {
                regenwurm[i].drawRegenwurm();
            }
            for (i = 0; i < 15; i++) {
                regenwurm[i] = new Regenwurm(120 + Math.random() * 600, 420 + Math.random() * 200, "#D76767", "#D76767");
            }
        }

        //Regentropfen:
        function regnen(): void {
            for (i = 0; i < nRegentropfen; i++) {
                let r: Regentropfen = new Regentropfen(Math.random() * 800, Math.random() * 600, 2.5, 0, 4 * Math.PI, "#2E9AFE");
                objects.push(r);
            }

            animate();
        }



        //Alert Funktion    
        function sonneAlert() {
            alert("");

        }

        function bluetenblaetterAlert() {
            alert("");
        }

        function bluetenkernAlert() {

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

        function nestAlert() {
            alert("Wir Bienen.... . Bei Regen verstecken wir uns.");
        }



        //Bienen zeichnen 
        for (let i: number = 0; i < biene.length; i++) {
            biene[i].drawBiene();
        }


        //Animation der Regentropfen 
        function animate(): void {
            console.log("Timeout");
            crc2.clearRect(0, 0, 800, 600);
            crc2.putImageData(Background, 0, 0); //Hintergrund wird restauriert

            for (i = 0; i < objects.length; i++) {
                let r: AnimiertesObjekt = objects[i];
                r.move();
            }

            window.setTimeout(animate, 20); //animate() wird alle 20ms aufgerufen

        }

    }//Ende init



}