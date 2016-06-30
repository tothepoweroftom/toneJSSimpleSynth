var ping = new Tone.PingPongDelay("4n", 0.2).toMaster();

var keys = new Tone.PolySynth(4, Tone.Sampler, {
		"A" : "./assets/meow1.mp3",
		"B" : "./assets/meow2.mp3",
		"C" : "./assets/meow3.mp3",
		"D" : "./assets/meow4.mp3",
	}, {
		"volume" : -10,
	}).connect(ping);



		//the notes
		var noteNames = ["A","B","C","D"];
		// var noteNames = ["F#3", "E3", "C#3", "A3"];
		
			var loop1 = new Tone.Sequence(function(time, col){
			var column = matrix1.matrix[col];
			for (var i = 0; i < 4; i++){
				if (column[i] === 1){

					keys.triggerAttackRelease(noteNames[i], "8n", time);
					
				}
			}
		}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "8n");

		Tone.Transport.start();
  
nx.onload = function(){
  
  nx.colorize("#33ccff");
  nx.colorize("fill", "#00394d");
    nx.colorize("border", "#00394d");
     nx.colorize("label", "#ffffff");
 			
			matrix1.col = 16;
			matrix1.init();
			matrix1.resize(800, 250);
			matrix1.draw();
			
		


  button1.mode = "toggle";
  button1.on("*", function(data){
    if (button1.val == 1){
      loop1.stop();
      button1.label = "Start";

    } else {
      loop1.start();
      button1.label = "Stop";
    }
    
  })
  
}




  
  
  
  
  
function setup() {
  // var cnv = createCanvas(1280,720);
  // background(0,57,77);
  // var button = createButton();
  // button.position(100,50);
  // button.mousePressed(trigger);



}

function draw() {


}
