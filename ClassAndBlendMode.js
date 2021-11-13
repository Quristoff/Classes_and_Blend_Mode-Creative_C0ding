
var cav;
var video1;
var video2;


class Capture{



  constructor(xPos,yPos,width,height){
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.capture = createCapture(VIDEO);
    this.x = random (120);
  }

  // getters and setters
  getCapture(){
    return capture;
  }

  display(){

    imageMode(CORNER);
    image(this.capture,this.xPos,this.yPos,this.width,this.height);
  }

  colorBar() {

    for (let i = 0 ; i < 120 ; i++){
      push();
      blendMode(SCREEN);
      noStroke();
      rectMode(CORNER);
      //let list = };
      fill(this.x, this.x, this.x,random(120,220));
      translate(this.xPos+i*(this.width/120),this.yPos);
      rect(0,0,this.width/120,this.height);
      pop();
    }
  }

  noise(){

    for (let i = 0; i < 100; i++){
      for (let j = 0; j < 100;j++){
        push();
        blendMode(SOFT_LIGHT);
        noStroke();
        rectMode(CORNER);
        fill(this.x, this.x, this.x,random(120,220));
        translate(this.xPos+i*(this.width/100),this.yPos+j*(this.height/100))
        rect(0,0,this.width/100,this.height/100);
        pop();
      }
    }
  }

  hide(){
    capture.hide();
  }




}
function preload(){

}

function setup() {

  cav = createCanvas(700,500);

  video1  = new Capture(0,-10,360,310);
  video2  = new Capture(width/2-130,height/2-120,480,380);
  video1.capture.hide();
  video2.capture.hide();







}

function draw(){
  clear();
  background(0,0,0);


  video2.display();
  filter(GRAY);
  video2.noise();
  blendMode(DIFFERENCE);
  video1.display();
  filter(GRAY);
  video1.colorBar();



}

function mousePressed(){
  if (isLooping()){
    noLoop();
  } else{
    loop();
  }
}
