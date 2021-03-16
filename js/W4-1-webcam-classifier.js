"use strict";

let mobilenet;
let video;
let label;

function modelReady() {
  console.log("Model is ready!");
  mobilenet.predict(gotResults);
}

function gotResults(error, results) {
    console.log("Prediction ready");
    const prediction = results[0];
    if(prediction.probability> 0.7){
      document.getElementById("label").innerHTML = prediction.className;
      console.log(results);
    }

    mobilenet.predict(gotResults);
    //console.log(results);
}

function imageReady() {
    image(puffin, 0, 0, width, height);
 }


function setup() {
  let canvas = createCanvas(640, 550);
  canvas.parent("container");
  video = createCapture(VIDEO);
  mobilenet = ml5.imageClassifier("MobileNet",video, modelReady);
  video.hide();
  background(0);
}

function draw() {
  background(0);
  image(video, 0, 0);
}