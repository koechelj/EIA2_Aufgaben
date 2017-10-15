window.addEventListener("load", init);

function init():void{
    let canvas:HTMLCanvasElement=document.getElementByTagName("canvas")[0];
console.log (canvas);
//Zeichnung
letcrc2:CanvasRenderingContext2D=canvas.getContext("2d");
console.log(crc2); 
   
//Gondel Linie   
  crc2.beginPath();
  crc2.moveTo(0,50);
  crc2.lineTo (650,250);
  crc2.stroke(); 
    
//Linie 1 Piste  
  crc2.beginPath();//Starte mit neuem Pfad
  crc2.moveTo(0,40);//gehe hierhin
  crc2.lineTo (400,300);//ziehe Linie bis
  crc2.stroke(); //Ende des Pfads
    
//Linie 2 Piste  
  crc2.beginPath();
  crc2.moveTo(0,90);
  crc2.lineTo (400,300);
  crc2.stroke(); 
    
//Baum 1
 crc2.beginPath();
 crc2.moveto(100,100);
    crc2.lineTo(120,130);
    crc2.lineTo(80,130);
    crc2.stroke(); //schlieﬂe das Dreieck
    crc2.fillstyle="green";
    crc2.fill();

//Baum 2
 crc2.beginPath();
 crc2.moveto(300,200);
    crc2.lineTo(320,230);
    crc2.lineTo(80,130);
    crc2.stroke(); //schlieﬂe das Dreieck
    crc2.fillstyle="green";
    crc2.fill();
    

//Baumstamm
crc2.fillstyle="";
crc2.fillRect(100,100,100,300);
    
    
    }