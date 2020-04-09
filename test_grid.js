var Game = require('./easter_bunny_hunt.min');

var game = new Game(Teams[1]);
game.attach_renderer();

Array.from(Array(80)).forEach(
  function () {
    game.take_turn();
  }
);
game.renderer.render();

