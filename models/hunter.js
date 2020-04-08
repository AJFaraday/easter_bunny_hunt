class Kid {

  constructor(game, x, y, func) {
    this.game = game;
    this.func = func;
    this.direction = null;
    this.x = x;
    this.y = y;
    this.api = new Api(game, this);
    this.storage = {};
  }

  take_turn() {
    this.func(
      this.api, 
      this.storage, 
      this.game.storage
    );
    this.move();
    this.check_collisions();
  }

  check_collisions() {

  }

  move() {
    switch(this.direction) {
      case n:
        this.y -= 1;
        break;
      case e:
        this.x += 1;
        break;
      case s:
        this.y += 1;
        break;
      case w:
        this.x -= 1;
    }
  }

  on_egg() {
    var kid = this;
    return(
      this.game.eggs.find(
        function(egg) {
          return(
            egg.x == this.x &&
            egg.y == this.y
          );
        }
      );
    )
  }

  on_bunny() {
    return (
      this.game.bunny.x == this.x &&
      this.game.bunny.y == this.y
    );
  }

}
