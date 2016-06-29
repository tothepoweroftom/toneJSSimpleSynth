var fmSynth = new Tone.SimpleFM().toMaster();

function setup() {
  var cnv = createCanvas(500,200);
  background(0);
  //pitch voice1 an octave below voice0
fmSynth.modulationIndex.value = 3.2;

  var button = createButton();
  button.position(10,10);
  button.mousePressed(trigger);
    var button2 = createButton();
  button2.position(50,10);
  button2.mousePressed(trigger)

}

function draw() {
  
}

function trigger(){
  fmSynth.triggerAttackRelease("C3", "4n");

}