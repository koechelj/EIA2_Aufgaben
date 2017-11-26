namespace sechsteAufgabe {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;  //Export: crc2 über Dateigrenze hinweg nutzbar
    export class movingObject {


    let Background: ImageData;

    //Haupt-Array vom Typ der Superklasse
    let superklasse: movingObject[] = [];
    
 
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



        //new: erzeugt die Objekte der Klassen. Hier Werte für die Attribute angeben:

        //Schleife Bäume 
        for (let i: number = 0; i < 7; i++) {
            baum[i] = new Baum(70 + Math.random() * 620, 450 + Math.random() * 100, "green");
        }

        //Schleife Schneeflocken
        for (let i: number = 0; i < 50; i++) {
            schneeflocken[i] = new Schneeflocken(Math.random() * 800, Math.random() * 600, 4, 0, 4 * Math.PI, "#A9F5F2");
        }

        //Schleife Skifahrer
        for (let i: number = 0; i < 1; i++) {
            skifahrer[i] = new Skifahrer(0, 180, "hsl(" + Math.random() * 360 + ", 100%, 50%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)");

        }




        //Hintergrund speichern
        Background = crc2.getImageData(0, 0, canvas.width, canvas.height);



        //Aufruf der Animationsfunktion
        animate();

    }




    //Animation des Skifahrers und der Schneeflocken 
    function animate(): void {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(Background, 0, 0); //Hintergrund wird restauriert

        //Skifahrer bewegen  
        for (let i: number = 0; i < skifahrer.length; i++) {
            skifahrer[i].moveSkifahrer();  //Skifahrer wird aus skifahrer Array rausgeholt. Die Methode moveSkifahre wird gleichzeitig aufgerufen
            skifahrer[i].drawSkifahrer();
        }


        //Schneeflocken bewegen
        for (let i: number = 0; i < schneeflocken.length; i++) {
            schneeflocken[i].moveSchneeflocken();
            schneeflocken[i].drawSchneeflocken();
        }

        //Bäume zeichnen 
        for (let i: number = 0; i < baum.length; i++) {
            baum[i].drawTree();
        }


        window.setTimeout(animate, 20); //animate() wird alle 20ms aufgerufen
    }

}

