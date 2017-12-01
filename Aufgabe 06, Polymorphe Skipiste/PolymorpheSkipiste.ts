namespace sechsteAufgabe {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;  //Export: crc2 über Dateigrenze hinweg nutzbar


    let Background: ImageData;
    let i: number;

    //Haupt-Array vom Typ der Superklasse
    let objects: movingObject[] = [];

    //weitere Arrays für die Objekte
    let nskifahrer: number = 3;
    let nschneeflocken: number = 50;

    let baum: Baum[] = [];



    function init(event: Event): void {
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
        for (i = 0; i < 7; i++) {
            baum[i] = new Baum(70 + Math.random() * 620, 450 + Math.random() * 100, "green");
        }



        //Schleife Skifahrer
        for (i = 0; i < nskifahrer; i++) {
            let s: Skifahrer = new Skifahrer(0 + Math.random() * 200, 180 + Math.random() * 130 , + "hsl(" + Math.random() * 360 + ", 100%, 50%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            objects.push(s);
        }



        //Schleife Schneeflocken
        for (i = 0; i < nschneeflocken; i++) {
            let s: Schneeflocken = new Schneeflocken(Math.random() * 800, Math.random() * 600, 4, 0, 4 * Math.PI, "#A9F5F2");
            objects.push(s);
        }


        //Hintergrund speichern
        Background = crc2.getImageData(0, 0, 800, 600);


        //Aufruf der Animationsfunktion
        animate();

    }



    //Animation des Skifahrers und der Schneeflocken 
    function animate(): void {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(Background, 0, 0); //Hintergrund wird restauriert

        for (i = 0; i < objects.length; i++) {
            let s: movingObject = objects[i];
            s.move();
        }

        
        //Bäume zeichnen 
        for (let i: number = 0; i < baum.length; i++) {
            baum[i].drawTree(); //Kurzversion: es wird auf das baum Array zugegriffen und gleichzeitig wird die drawTree function angehängt.
        }


        window.setTimeout(animate, 20); //animate() wird alle 20ms aufgerufen
    }

}

