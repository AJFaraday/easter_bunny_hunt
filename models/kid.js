class Kid {

  constructor(game, x, y, func) {
    this.game = game;
    this.func = func;
    this.direction = null;
    this.x = x;
    this.y = y;
    this.api = new KidApi(game, this);
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
    var kid = this;
    var eggs = this.on_egg();
    if(eggs) {
      this.game.score_points(eggs.length);
      eggs.forEach(function(egg){
        var index = kid.game.eggs.indexOf(egg);
        kid.game.eggs.splice(index, 1);
      });
    }
    if (this.on_bunny()) {
      this.game.winner = 'kids';
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
    if (this.x < 0) {this.x = 0}
    if (this.y < 0) {this.y = 0}
    if (this.x > 48) {this.x = 48}
    if (this.y > 48) {this.y = 48}
  }

  on_egg() {
    var kid = this;
    return(
      this.game.eggs.filter(
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
