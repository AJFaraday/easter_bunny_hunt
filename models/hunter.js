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
  }

  move() {
    
  }

}
