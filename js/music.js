// Get a reference to the button element
var startButton = document.getElementById("startButton");

// Add a click event listener to the button
startButton.addEventListener("click", function() {
  // Create an audio element
  var audio = new Audio("music/music.mp3");
  
// Enable looping for the audio
audio.loop = true;
  
  // Play the audio file
  audio.play();
});
