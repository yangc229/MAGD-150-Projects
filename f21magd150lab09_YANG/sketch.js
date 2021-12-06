var song;
var slider;
var button;

let capture;

let sound, amplitude;

function preload() {
  song = loadSound("Mirrors.mp3"); // play mirrors by justin timberlake
}

function setup() {
  createCanvas(400, 400);
  createP("Who is the prettiest?");
  slider = createSlider(0,1,0.5,0.01); // volume up or down
  button = createButton("play");
  button.mousePressed(togglePlaying)
  amplitude = new p5.Amplitude();
  
  capture = createCapture(VIDEO);
  capture.size(150,115);
}

function draw() {
  background(0);
  song.setVolume(slider.value());
  let level = amplitude.getLevel();
  let size = map(level,0,1,0,300);
  ellipse(width/2,height/2,size,size);
  
  image(capture,0,0,150,115); // image of you on canvas
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    button.html("pause"); // pause the song
  } else {
    song.pause();
    button.html("play"); // play the song where it left off
  }
}

function togglePlay() {
    if(sound.isPlaying()){
      sound.pause();
    } else {
      sound.loop();
      amplitude = new p5.Amplitude();
      amplitude.setInput(sound);
    }
  }