leftwristx=0;
rightwristx=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500)
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function preload(){


}
function draw(){
background("gray");
text("Aydin",30,250);
textSize(difference);
fill("blue");
}
function modelloaded(){
    console.log("posenetisloaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        console.log(leftwristx,rightwristx);
        difference=Math.floor(leftwristx-rightwristx);
    }
}