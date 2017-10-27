namespace zweiteAufgabe {

    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    //Information für die X und Y Position muss global gehalten werden, damit immer darauf zugegriffen werden kann
    let arrayX: number[] = [];
    let arrayY: number[]= [];

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
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
        crc2.fillRect(180, 95, 65, 40); //Position x,y, Breite, Höhe des Rechtecks

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




        //Aufruf konstant platzierte Bäume (Parameter einsetzen)
        drawTree(680, 80, "green");
        drawTree(150, 380, "green");



        //Parameter Funktion für zufällige Bäume
        function drawTree(x: number, y: number, color: string): void {
            crc2.beginPath();
            crc2.moveTo(x, y);   //Position x und y sind variabel
            crc2.lineTo(x + 30, y - 60); 
            crc2.lineTo(x + 60, y);
            crc2.strokeStyle = color;
            crc2.stroke();
            crc2.fillStyle = color;
            crc2.fill();
        }


        //Bäume an zufälliger Position zwischen X 70-620 und Y 450-500 (for Schleife)
        for (let i: number = 0; i < 10; i++) {
            let x: number = 70 + Math.random() * 620; //zufällige x und y Werte, Math.random() nimmt Wert zwischen 0 und 1 an
            let y: number = 450 + Math.random() * 500;
            //Aufruf der drawTree Funktion
            drawTree(x, y, "green")

        }


        //Schneeflocken, die zufällig im ganzen Canvas erscheinen (Parameter Funktion)
        function Schneesturm(x: number, y: number, radius: number, winkel: number, circle: number, color: string): void {
            crc2.beginPath();
            crc2.arc(x, y, radius, winkel, circle);
            crc2.fillStyle = color;
            crc2.fill();

        }

        //Zeichne Schneeflocken mithilfe einer Schleife
        for (let i: number = 0; i < 250; i++) {

            let x: number = 0 + Math.random() * 790; //x und y Position der Flocken ist zufällig, irgendwo im Bereich x bis 790 und y bis 600
            let y: number = 0 + Math.random() * 600;
            //Aufruf (Werte für Parameter einsetzen)
            Schneesturm(x, y, 5, 0, 5 * Math.PI, "#CEF6F5");
        }

    }

}