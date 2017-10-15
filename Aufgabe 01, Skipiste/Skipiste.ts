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
    
  //Gondel 1   
  crc2.beginPath();
  crc2.moveTo(180,65);
  crc2.lineTo (195,90);
  crc2.lineTo (180,120);
  crc2.stroke();  
    
    
    //Gondel 2   
  crc2.beginPath();
  crc2.moveTo(420,130);
  crc2.lineTo (435,155);
  crc2.lineTo (420,185);
  crc2.stroke();    
    
    
//Linie 1 Piste  
  crc2.beginPath();//Starte mit neuem Pfad
  crc2.moveTo(200,200);//gehe hierhin
  crc2.lineTo (620,320);//ziehe Linie bis
  crc2.stroke(); //Ende des Pfads
    
//Linie 2 Piste  
  crc2.beginPath();
  crc2.moveTo(170,350);
  crc2.lineTo (600,520);
  crc2.stroke(); 
    
//Baum 1
 crc2.beginPath();
 crc2.moveto(150,380);
    crc2.lineTo(120,440);
    crc2.lineTo(180,440);
    crc2.stroke(); //schlieﬂe das Dreieck
    crc2.fillstyle="green";
    crc2.fill();
    
//Baumstamm 1
    crc2.fillstyle="maroon";
    crc2.fillRect(130,440,10,30);

//Baum 2
 crc2.beginPath();
 crc2.moveto(680,80);
    crc2.lineTo(650,140);
    crc2.lineTo(710,140);
    crc2.stroke(); //schlieﬂe das Dreieck
    crc2.fillstyle="green";
    crc2.fill();
    
//Baumstamm 2
    crc2.fillstyle="";
    crc2.fillRect(660,140,10,30);
    
    //Berg 1
    crc2.beginPath();
    crc2.moveto(400,50);
    crc2.lineTo(420,15);
    crc2.lineTo(440,50);
    crc2.stroke(); //Ende des Pfads
   
     //Berg 2
    crc2.beginPath();
    crc2.moveto(440,50);
    crc2.lineTo(460,15);
    crc2.lineTo(480,50);
    crc2.stroke(); //Ende des Pfads
    
    
     //Berg 3
    crc2.beginPath();
    crc2.moveto(470,35);
    crc2.lineTo(500,15);
    crc2.lineTo(520,50);
    crc2.stroke(); //Ende des Pfads
    
    
    }