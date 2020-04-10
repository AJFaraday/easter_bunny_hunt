class OldBunny {

  constructor(game) {
    this.game = game;
    this.x = 24;
    this.y = 24;
    this.eggs_remaining = 100;
  }

  take_turn() {
    var bunny = this;
    this.close_kids = this.game.kids.filter(
      function (k) {
        return (
          k.y > (bunny.y - 5) &&
          k.y < (bunny.y + 5) &&
          k.x > (bunny.x - 5) &&
          k.x < (bunny.x + 5)
        )
      }
    );
    if (this.hop_x() != 0 || this.hop_y() != 0) {
      this.drop_egg();
      this.x += this.hop_x();
      this.y += this.hop_y();
    } else {

    }
    if (this.out_of_bounds() || this.eggs_remaining <= 0) {
      this.game.end();
    }
  }

  out_of_bounds() {
    return (
      this.x < 0 ||
      this.y < 0 ||
      this.x > 49 ||
      this.y > 49
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
    return this.kids_above() - this.kids_below();
  }

  kids_above() {
    var bunny = this;
    return this.close_kids.filter(
      function (k) {
        return k.y < bunny.y
      }
    ).length;
  }

  kids_below() {
    var bunny = this;
    return this.close_kids.filter(
      function (k) {
        return k.y > bunny.y
      }
    ).length;
  }

  kids_left() {
    var bunny = this;
    return this.close_kids.filter(
      function (k) {
        return k.x < bunny.x
      }
    ).length;
  }

  kids_right() {
    var bunny = this;
    return this.close_kids.filter(
      function (k) {
        return k.x > bunny.x
      }
    ).length;
  }

}
