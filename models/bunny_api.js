class BunnyApi {

  constructor(game, bunny, entry) {
    this.game = game;
    this.source_bunny = bunny;
    this.storage_object = entry.storage;
  }

  storage() {
    return this.storage_object;
  }

  hop(x, y) {
    this.source_bunny.hop_x = x;
    this.source_bunny.hop_y = y;
  }


  turn() {
    return this.game.turn;
  }

  eggs() {
    return (
      this.game.eggs.map(
        function(egg) {
          return {x: egg.x, y: egg.y};
        }
      )
    );
  }

  bunny() {
    return (
      {
        x: this.source_bunny.x,
        y: this.source_bunny.y,
        eggs_remaining: this.source_bunny.eggs_remaining
      }
    );
  }


  kids() {
    var api = this;
    return (
      this.game.kids.filter(
        function(kid) {
          return BunnyApi.near_to(api.source_bunny, kid);
        }
      ).map(
        function(kid) {
          return (
          {
            x: kid.x,
            y: kid.y
          }
          );
        }
      )
    );
  }


  static near_to(a, b) {
    return (
      b.x <= (a.x + 5) &&
      b.x >= (a.x - 5) &&
      b.y <= (a.y + 5) &&
      b.y >= (a.y - 5)
    );
  }

}
