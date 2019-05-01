// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Number Guessing Chatbot
// Edited Video: https://www.youtube.com/watch?v=zGe1m_bLOFk
function setup() {
  noCanvas();

  // variable for the RiveScript
  let bot = new RiveScript();
  // Load an individual file.
  bot.loadFile("brain.rive").then(loading_done).catch(loading_error);
  // two callbacks 1/2
  function loading_done() {
    console.log('Chatbot ready!')
  }
  // 2/2
  function loading_error() {
    console.log('Chatbot error!')
  }

  let button = select('#submit'); //
  let user_input = select('#user_input');
  let output = select('#output');

  button.mousePressed(chat);

  function chat() {
    // gettin the value of the variable user_input made by keyboard
    let input = user_input.value();
    // displaying that new variable in the html page
    output.html(input);
  }


}
