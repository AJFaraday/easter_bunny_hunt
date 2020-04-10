class Bunny {

  constructor(game, entry) {
    this.game = game;
    this.func = entry.function;
    this.x = 24;
    this.y = 24;
    this.eggs_remaining = 100;
    this.hop_x = 0;
    this.hop_y = 0;
    this.api = new BunnyApi(game, entry);
  }

  take_turn() {
    this.func(
      this.api
    );
    if(this.hop_x != 0 || this.hop_y != 0) {
      if(this.hop_x > 2) {this.hop_x = 2}
      if(this.hop_x < -2) {this.hop_x = -2}
      if(this.hop_y > 2) {this.hop_y = 2}
      if(this.hop_y < -2) {this.hop_y = -2}
      this.drop_egg();
      this.hop(this.hop_x, this.hop_y);
    } else {

    }
    if(this.eggs_remaining <= 0) {
      this.game.winner = 'bunny';
      this.game.end();
    }
  }

  hop(x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
    if (this.x < 0) {this.x = 0}
    if (this.y < 0) {this.y = 0}
    if (this.x > 48) {this.x = 48}
    if (this.x > 48) {this.x = 48}
  }

  drop_egg() {
    this.game.eggs.push({x: this.x, y: this.y});
    this.eggs_remaining -= 1;
  }

}
