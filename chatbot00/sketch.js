// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Number Guessing Chatbot
// Edited Video: https://www.youtube.com/watch?v=zGe1m_bLOFk
function setup() {
  noCanvas();

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
