var Game = require('./easter_bunny_hunt.min');

var game = new Game(Teams[0], Bunnies[0]);
game.attach_renderer();

Array.from(Array(230)).forEach(
  function () {
    game.take_turn();
  }
);
game.renderer.render();

console.log(
game.bunny.api.kids()
);
