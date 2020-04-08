class Bunny {

  constructor(game) {
    this.game = game;
    this.x = 25;
    this.y = 25;
    this.eggs_remaining = 100;
    this.caught = false;
  }

  move() {
    if (this.hop_x != 0 && this.hop_y != 0) {
      this.drop_egg();
      this.x += this.hop_x();
      this.y += this.hop_y();
    }
  }

  drop_egg() {
    this.game.eggs.push({x: this.x, y: this.y});
    this.eggs_remaining -= 1;
  }

  hop_x() {
    return this.hunters_left() - this.hunters_right();
  }

  hop_y() {
    return this.hunters_below() - this.hunters_above();
  }

  hunters_above() {
    var bunny = this;
    return this.game.hunters.filter(
      function(h) {return h.y < bunny.y}
    );
  }

  hunters_below() {
    var bunny = this;
    return this.game.hunters.filter(
      function(h) {return h.y > bunny.y}
    );
  }

  hunters_left() {
    var bunny = this;
    return this.game.hunters.filter(
      function(h) {return h.x < bunny.x}
    );
  }

  hunters_right() {
    var bunny = this;
    return this.game.hunters.filter(
      function(h) {return h.x > bunny.x}
    );
  }

}
