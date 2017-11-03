namespace dritteAufgabe {

    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    //Array f�r Skifahrer
    let arraySkifahrerX: number[] = [10];
    let arraySkifahrerY: number[] = [190];

    //Array f�r Schneeflocken
    let arraySchneeX: number[] = []; 
    let arraySchneeY: number[] = [];



    let Background: ImageData;



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
        for (let i: number = 0; i < 7; i++) {
            let x: number = 70 + Math.random() * 620; //zuf�llige x und y Werte
            let y: number = 450 + Math.random() * 100;
            //Aufruf der drawTree Funktion
            drawTree(x, y, "green");

        }


        //Hintergrund speichern
        Background = crc2.getImageData(0, 0, canvas.width, canvas.height);


        //Aufruf der Animationsfunktion
        animate();


        for (let i: number = 0; i < 50; i++) {
            arraySchneeX[i] = 800 * Math.random();
            arraySchneeY[i] = 600 * Math.random();
        }

    }



    //Parameter Funktion f�r zuf�llige B�ume
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

    //Schneeflocken
    function Schneeflocken(x: number, y: number, radius: number, winkel: number, circle: number, color: string): void {
        crc2.beginPath();
        crc2.arc(x, y, 5, 0, 5 * Math.PI);
        crc2.fillStyle = color;
        crc2.fill();

    }

    //Skifahrer
    function Skifahrer(x: number, y: number): void {
        //Kopf
        crc2.beginPath();
        crc2.arc(x, y, 10, 0, 4 * Math.PI);
        crc2.fillStyle = "orange";
        crc2.fill();
        //K�rper
        crc2.fillStyle = "blue";
        crc2.fillRect(x - 8, y + 8, 10, 15);
        //Skibretter
        crc2.beginPath();
        crc2.moveTo(x - 7, y + 21);
        crc2.lineTo(x - 7, y + 23);
        crc2.lineTo(x + 12, y + 30);
        crc2.lineTo(x + 12, y + 28);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.fill();
    }


    //Animation des Skifahrers und der Schneeflocken
    function animate(): void {
        console.log("Timeout");
        crc2.putImageData(Background, 0, 0); //Hintergrund wird restauriert

        //Skifahrer bewegen
        for (let i: number = 0; i < arraySkifahrerX.length; i++) { //Hier muss das X oder Y Array verwendet werden
            if (arraySkifahrerX[i] > 800) {  //Bereich, in dem der Skifahrer sich bewegt:
                arraySkifahrerX[i] = 0;
                arraySkifahrerY[i] = 180;
            }
            //x und y Wert einer Skala
            arraySkifahrerX[i] += 3;
            arraySkifahrerY[i] += 1;
            Skifahrer(arraySkifahrerX[i], arraySkifahrerY[i]);
        }

        //Schneeflocken bewegen
        for (let i: number = 0; i < arraySchneeY.length; i++) {
            if (arraySchneeY[i] > 600) {
                arraySchneeY[i] = 0;
            }
            arraySchneeY[i] += Math.random();
            Schneeflocken(arraySchneeX[i], arraySchneeY[i]);
        }

        window.setTimeout(animate, 20);
    }

}

