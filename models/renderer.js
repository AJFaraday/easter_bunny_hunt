String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

class Renderer {

  template_grid() {
    var str = "+-------------------------------------------------+\n";
    Array.from(Array(49)).forEach(
      function () {
        str = str.concat("+                                                 +\n");
      }
    );
    str = str.concat("+-------------------------------------------------+\n");
    return str;
  }

  constructor(game) {
    this.game = game;
  }

  render() {
    var renderer = this;
    this.grid = this.template_grid();
    this.draw_object(this.game.bunny, 'B');
    this.game.kids.forEach(
      function(kid, index) {
        renderer.draw_object(kid, (index + 1));
      }
    );
    this.game.eggs.forEach(
      function(egg) {
        renderer.draw_object(egg, 'o');
      }
    );


    console.log(this.grid);
    console.log(`team:  ${this.game.team_name}`);
    console.log(`bunny: ${this.game.bunny_name}`);
    console.log(`turn:  ${this.game.turn}`);
    console.log(`score: ${this.game.score}`)
  }

  draw_object(object, char) {
    if (object.x >= 0 && object.y >= 0 && object.x < 49 && object.y < 49) {
      this.draw_at(object.x, object.y, char.toString());
    }
  }

  draw_at(x, y, char) {
    var idx = (y + 1) * 52;
    idx += (x + 1);
    return this.grid = this.grid.replaceAt(idx, char);
  }

}

module.exports = Renderer;