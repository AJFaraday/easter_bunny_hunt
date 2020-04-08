Teams = {};
class Game {

  constructor(team) {
    this.score = 0;
    this.turn = 0;
    this.active = true;

    this.bunny = new Bunny(this);
    this.eggs = [];

    this.name = team.name;
    this.storage = team.shared_storage;
    this.place_kids(team);
  }

  place_kids(team) {
    this.kids = [
      (new Kid(this, 0, 0, team.functions[0])),
      (new Kid(this, 48, 0, team.functions[1])),
      (new Kid(this, 48, 48, team.functions[2])),
      (new Kid(this, 0, 48, team.functions[3]))
    ];
  }

  run() {
    while(this.active) {
      this.take_turn();
      this.turn += 1;
      if(this.turn > 1000000) {
        this.end();
      }
    }
  }

  take_turn() {
    this.kids.forEach(
      function(kid) {
        kid.take_turn();
      }
    );
    this.bunny.move();
  }

  end() {
    this.active = false;
  }
  
}
