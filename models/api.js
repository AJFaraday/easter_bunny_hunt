clsss Api {

  constructor(game, kid) {
    this.game = game;
    this.source_kid = kid;
    this.storage = {};
  }

  my_storage() {
    return this.storage;
  }

  shared_storage() {
    this.game.storage;
  }

  north() {
    this.kid.direction = 'n';
  }

  east() {
    this.kid.direction = 'e'
  }

  south() {
    this.kid.direction = 's';
  }

  west() {
    this.kid.direction = 'w';
  }

  turn() {
    return this.game.turn;
  } 

  eggs() {
    this.game.eggs.map(
      function(egg) {
        return {x: egg.x, y: egg.y});
      }
    );
  }
  
  bunny() {
    return {
      x: this.game.bunny.x,
      y: this.game.bunny.y,
      eggs_remaining: this.game.bunny.eggs_remaining
    }
  }

  kids() {
    var api = this;
    this.game.kids.map(
      function(kid) {
        return(
          {
            x: kid.x,
            y: kid.y,
            me: (kid == api.source_kid)
          }
        );
      }
    ):
  }

  kid() {
    return(
      {
        x: this.source_kid.x,
        y: this.source_kid.y,
        me: true
      }
    );
  }

}
