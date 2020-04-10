Teams = [];
Bunnies = [];

class Game {

  static run_all() {
    var scores = [];
    Teams.forEach(
      function (team) {
        var game = new Game(team);
        game.run();
        scores.push({name: game.name, score: game.score});
      }
    );
    scores = scores.sort(
      function (a, b) {
        return b.score - a.score;
      }
    );
    scores.forEach(
      function (score) {
        console.log(score.name + ': ' + score.score);
      }
    );
  }

  static run_one(team_name) {
    var team = Teams.find(
      function (team) {
        return team.name == team_name;
      }
    );
    if (team) {
      var game = new Game(team);
      game.attach_renderer();
      game.run();
      console.log(team_name + ': ' + game.score);
    } else {
      console.log('No team named ' + team_name + 'was found');
    }
  }

  constructor(team, bunny) {
    this.score = 0;
    this.turn = 0;
    this.active = true;

    this.bunny = new Bunny(this, bunny);
    this.eggs = [];

    this.teram_name = team.name;
    this.bunny_name = bunny.name;
    
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

  attach_renderer() {
    this.renderer = new Renderer(this);
  }

  run() {
    if (this.renderer) {
      var game = this;
      this.process = setInterval(
        function() {
          game.take_turn();
        },
        config.turn_time
      )
    } else {
      while (this.active) {
        this.take_turn();
      }
    }
  }

  score_points(n) {
    if (this.active) {
      this.score += n;
    }
  }

  take_turn() {
    this.kids.forEach(function (kid) {
      kid.take_turn();
    });
    this.bunny.take_turn();
    if (this.renderer) {
      this.renderer.render();
      if (!this.active) {
        clearInterval(this.process)
      }
    }
    if (this.turn > config.match_limit) {
      this.end();
    }
    this.turn += 1;
  }

  end() {
    this.active = false;
  }

}
