
// First part: Using scrollama to do fun stuff when we scroll
// Full documentation: https://github.com/russellgoldenberg/scrollama
const scroller = scrollama();

// options object
var options = {
    step: ".list",  // watch all ".list" divs
    debug: true,    // include the dashed line showing where the threshold is
    progress: true, // update as you progress through elements
    offset: 0.9     // change offset from middle of page to closer to the bottom
}

scroller
  .setup(options)
  .onStepEnter(function(response) {
    // called whenever an element "enters" the threshold line
    // Variation 1: change background color through JS style
    // response.element.style.backgroundColor = "orange";

    // Variation 2: change multiple styles by adding/removing a class
    response.element.classList.add("show");        
  })
  .onStepProgress(function(response) {
    // once Enter happens, triggers the progress % of the element
    // response.element.style.opacity = response.progress;
  })
  .onStepExit(function(response) {
    // called whenever the element "leaves" the threshold line
    
    // Variation 1, resetting bg color on exit
    // response.element.style.backgroundColor = "";
    
    // Variation 2, removing class on exit
    // response.element.classList.remove("show");
    // Note that for the page we made, exit isn't necessary
  });

console.log(scroller);

// Second part: ToneJS for audio

// create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

// play a middle 'C' for the duration of an 8th note when the button is pressed
var button = document.querySelector(".playNote");
button.addEventListener("click", function(e) {
    synth.triggerAttackRelease("C4", "8n");
})




