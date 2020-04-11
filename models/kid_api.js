class KidApi {

  constructor(game, kid) {
    this.game = game;
    this.source_kid = kid;
    this.storage = {};
  }

  my_storage() {
    return this.storage;
  }

  shared_storage() {
    return this.game.storage;
  }

  north() {
    this.source_kid.direction = 'n';
  }

  east() {
    this.source_kid.direction = 'e'
  }

  south() {
    this.source_kid.direction = 's';
  }

  west() {
    this.source_kid.direction = 'w';
  }

  turn() {
    return this.game.turn;
  }

  eggs() {
    var api = this;
    return (
      this.game.eggs.filter(
        function(egg) {
          return KidApi.near_to(api.source_kid, egg)
        }
      ).map(
        function(egg) {
          return {
            x: egg.x,
            y: egg.y,
            age: (api.game.turn - egg.dropped_turn)
          };
        }
      )
    );
  }

  bunny() {
    var bunny = this.game.bunny;
    if(KidApi.near_to(this.source_kid, bunny)) {
      return (
      {
        x: bunny.x,
        y: bunny.y,
        eggs_remaining: bunny.eggs_remaining
      }
      );
    } else {
      return null;
    }
  }


  kids() {
    var api = this;
    return (
      this.game.kids.map(
        function(kid) {
          return (
          {
            x: kid.x,
            y: kid.y,
            me: (kid == api.source_kid)
          }
          );
        }
      )
    );
  }

  kid() {
    return (
    {
      x: this.source_kid.x,
      y: this.source_kid.y,
      me: true
    }
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
