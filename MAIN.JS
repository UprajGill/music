function setup(){
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
song1="";
song2="";
function preload(){
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}
function draw(){
image(video,600,500);
}
function play(){
song.play();

}