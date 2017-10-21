namespace zweiteAufgabe {

    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

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
        crc2.fillRect(180, 95, 65, 40);

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


        
      
        //konstant platzierte Bäume
       drawTree(680, 80, "green");
        drawTree(150, 380, "green");

    }

   
    function drawTree(x: number, y: number, color: string): void {
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 30, y + 20);
        crc2.lineTo(x - 30, y - 20);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = color;
        crc2.fill();
    }
    
    

    
    //6 Bäume an zufälliger Stelle zwischen X 190-700 und Y 520-580 (for Schleife)
    for (let i: number = 0; i < 6; i++) {
        let x: number = 190 + Math.random() * 700;
        let y: number = 520 + Math.random() * 580;

        drawTree(x, y, "green")

    }


}
