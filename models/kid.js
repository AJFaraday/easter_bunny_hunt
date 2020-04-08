class Kid {

  constructor(game, x, y, func) {
    this.game = game;
    this.func = func;
    this.direction = null;
    this.x = x;
    this.y = y;
    this.api = new Api(game, this);
  }

  take_turn() {
    this.func(
      this.api
    );
    this.move();
    this.check_collisions();
    this.direction = null;
  }

  check_collisions() {
    var egg = this.on_egg();
    if(egg) {
      this.game.score_points(1);
      var index = this.game.eggs.indexOf(egg);
      this.game.eggs.splice(index, 1);
    }
    if (this.on_bunny()) {
      this.game.score_points(10);
      this.game.end();
    }
  }

  move() {
    switch(this.direction) {
      case 'n':
        this.y -= 1;
        break;
      case 'e':
        this.x += 1;
        break;
      case 's':
        this.y += 1;
        break;
      case 'w':
        this.x -= 1;
    }
  }

  on_egg() {
    var kid = this;
    return(
      this.game.eggs.find(
        function(egg) {
          return(
            egg.x == kid.x &&
            egg.y == kid.y
          );
        }
      )
    );
  }

  on_bunny() {
    return (
      this.game.bunny.x == this.x &&
      this.game.bunny.y == this.y
    );
  }

}
