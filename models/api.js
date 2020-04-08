clsss Api {

  constructor(game, kid) {
    this.game = game;
    this.kid = kid;
    this.storage = {};
  }

  my_storage() {
    return this.storage;
  }

  shared_storage() {
    this.game.storage;
  }
  

}
