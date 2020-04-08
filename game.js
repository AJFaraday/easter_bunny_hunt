Teams = [];
class Game {

  static run_all() {
    var scores = [];
    Teams.forEach(
      function(team) {
        var game = new Game(team);
        game.run(); 
        scores.push({name: game.name, score: game.score});
      }
    );
    scores = scores.sort(
      function(a, b) {
        return b.score - a.score;
      }
    );
    scores.forEach(
      function(score) {
        console.log(score.name + ': ' + score.score);
      }
    );
  }

  static run_one(team_name) {
    var team = Teams.find(
      function(team) {
        return team.name == team_name;
      }
    );
    if (team) {
      var game = new Game(team);
      game.run();
      console.log(team_name + ': ' + game.score);
    } else {
      console.log('No team named ' + team_name + 'was found');
    }
  }

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
      (new Kid(this, 1, 1, team.functions[0])),
      (new Kid(this, 49, 1, team.functions[1])),
      (new Kid(this, 49, 49, team.functions[2])),
      (new Kid(this, 1, 49, team.functions[3]))
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

  score_points(n) {
    if(this.active) {
      this.score += n;
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
