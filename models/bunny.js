class Bunny {

  constructor(game) {
    this.game = game;
    this.x = 25;
    this.y = 25;
    this.eggs_remaining = 100;
  }

  move() {
    if (this.hop_x != 0 && this.hop_y != 0) {
      this.drop_egg();
      this.x += this.hop_x();
      this.y += this.hop_y();
    }
    if (this.out_of_bounds()) {
      this.game.end();
    }
  }

  out_of_bounds() {
    return(
      this.x < 0 ||
      this.y < 0 ||
      this.x > 48 ||
      this.y > 48
    );
  }

  drop_egg() {
    this.game.eggs.push({x: this.x, y: this.y});
    this.eggs_remaining -= 1;
  }

  hop_x() {
    return this.kids_right() - this.kids_left();
  }

  hop_y() {
    return this.kids_below() - this.kids_above();
  }

  kids_above() {
    var bunny = this;
    return this.game.kids.filter(
      function(k) {return k.y < bunny.y}
    );
  }

  kids_below() {
    var bunny = this;
    return this.game.kids.filter(
      function(k) {return k.y > bunny.y}
    );
  }

  kids_left() {
    var bunny = this;
    return this.game.kids.filter(
      function(k) {return k.x < bunny.x}
    );
  }

  kids_right() {
    var bunny = this;
    return this.game.kids.filter(
      function(k) {return k.x > bunny.x}
    );
  }

}
