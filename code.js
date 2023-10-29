    var s2;
    var precisão = 0
    var c;
    var s;
    var carregou = false;
 var objetos = []
 var som;
function setup(){
    canvas = createCanvas(420,420);
    canvas.position(windowWidth/2-210,windowHeight/2-160);

    video = createCapture(VIDEO);
    video.hide()
   
    c = document.getElementById("c").value;
}
function modelRealy(){
    console.log("o indentificador de objetos está pronto! :D");
    robo.detect(video, gotR)
}
function gotR(erro,r){
    if(erro){
        console.log(erro)
    }else{
        console.log(r);
        objetos = r ;
        carregou = true;
    }
}

function draw(){
    image(video,0,0,420,420);
    

if(carregou){  
    document.getElementById("qdo").innerHTML = "O modelo CocoSSD detectou "+objetos.length+" objetos";
    document.getElementById("status").innerHTML = "Objetos detectados entre eles:";

for(var i = 0; i < objetos.length; i++){
   
    stroke("red")
    noFill()
    rect(objetos[i].x,objetos[i].y,objetos[i].width,objetos[i].height)
    fill("red")
    textSize(20)
    textAlign("center")
    p = Math.round(objetos[i].confidence*100)
    text(objetos[i].label+" "+p+"%",objetos[i].x+50,objetos[i].y+30)


if(objetos[i].label == c){
 s2 = "O bebê ou "+c+" foi detectado"
}
if(objetos[i].label == c){
som.play;
s2 = c+" não foi encontrado"

}

}
}
}
function detect(){
    robo= ml5.objectDetector('cocossd', modelRealy)

    s2  = document.getElementById("status2");
   
s  = document.getElementById("status");
}
function preload(){
    som = loadSound("alarme.mp3")
}