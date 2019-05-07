// Number Guessing Chatbot
// Edited Video: https://www.youtube.com/watch?v=zGe1m_bLOFk
function setup() {
  noCanvas();

  let bot = new RiveScript();
  // bot.loadFile("brain/testsuite.rive").then(loading_done).catch(loading_error);
  bot.loadFile("brain.rive").then(brainReady).catch(brainError);

  function brainReady() {
    console.log('Chatbot ready!');
    bot.sortReplies();
    let num = floor(random(10)) + 1;
    console.log(num);
    let reply = bot.reply('local-user', 'set ' + num);

    // RiveScript remembers user data by their username and can tell
    // multiple users apart.
    let username = "local-user";

    // NOTE: the API has changed in v2.0.0 and returns a Promise now.
    bot.reply(username, "Hello, bot!")
    .then(
      function(reply) {
      console.log("The bot says: " + reply);
      }
    );
  }

  function brainError() {
    console.log('Chatbot error!')
  }

  let button = select('#submit');
  let user_input = select('#user_input');
  let output = select('#output');

  button.mousePressed(chat);

  function chat() {
    let input = user_input.value();
    bot.reply("local-user", input)
    .then(
      function(reply) {
        console.log( reply);
        output.html(reply);
      }
    );﻿
  }
}
