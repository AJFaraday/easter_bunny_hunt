Teams = [];
Bunnies = [];

class Game {

  static run_all() {
    var matches = [];
    Teams.forEach(
      function(team) {
        Bunnies.forEach(
          function(bunny) {
            var game = new Game(team, bunny);
            game.run();
            matches.push(
              {
                team_name: game.team_name,
                bunny_name: game.bunny_name,
                score: game.score,
                winner: game.winner
              }
            );
          }
        )
      }
    );
    matches = matches.sort(
      function(a, b) {
        return b.score - a.score;
      }
    );

    console.log('Matches:');
    scores.forEach(
      function(match){
        console.log(
          match.team_name + ' Vs. ' + match.bunny_name + ': ' +
          match.score + ' to ' + match.winner
      }
    );
    console.log('');

    score_board = {teams = {}, bunnies: {}};
    scores.forEach(
      function(score) {
        console.log(`${score.team_name} Vs. ${score.bunny_name}: ${score.score} to ${score.winner}`);
        if (game.winner == 'bunny') {
          if (score_board.bunnies[game.bunny_name]) {
            score_board.bunnies[game.bunny_name] += game.score;
          } else {
            score_board.bunnies[game.bunny_name] = game.score;
          }
        } else if (game.winner == 'kids') {
          if (score_board.teams[game.team_name]) {
            score_board.teams[game.team_name] += game.score;
          } else {
            score_board.teams[game.team_name] = game.score;
          }
        }
      }
    );
    console.log('Teams:');
    Object.keys(score_board.teams).map(
      function(team_name) {
        return {name: team_name, score: score_board.teams[team_name]}
      }
    ).sort(
      function(a, b) {
        return b.score - a.score;
      }
    ).forEach(
      function(team) {
        console.log(team.name + ': ' + team.score);
      }
    );
    console.log('');

    console.log('Bunnies:');
    Object.keys(score_board.bunnies).map(
      function(bunny_name) {
        return {name: bunny_name, score: score_board.bunnies[bunny_name]}
      }
    ).sort(
      function(a, b) {
        return b.score - a.score;
      }
    ).forEach(
      function(bunny) {
        console.log(bunny.name + ': ' + bunny.score);
      }
    );
  }

  static run_one(team_name, bunny_name) {
    var team = Teams.find(
      function(team) {
        return team.name == team_name;
      }
    );
    var bunny = Bunnies.find(
      function(bunny) {
        return bunny.name == bunny_name;
      }
    );
    if(team && bunny) {
      var game = new Game(team, bunny);
      game.attach_renderer();
      game.run();
      console.log(
        team_name + ' Vs. ' + bunny_name + ': ' +
        game.score + ' to ' + game.winner
      )
      ;
    } else {
      if (!team) {
        console.log('No team named ' + team_name + 'was found');
      }
      if (!bunny) {
        console.log('No bunny named ' + bunny_name + 'was found');
      }
    }
  }

  static run_to_turn(team_name, bunny_name, turn) {
    var team = Teams.find(
      function(team) {
        return team.name == team_name;
      }
    );
    var bunny = Bunnies.find(
      function(bunny) {
        return bunny.name == bunny_name;
      }
    );
    if(team && bunny) {
      var game = new Game(team, bunny);
      game.attach_renderer();
      config.match_limit = Number(turn) - 2;
      game.run();
      console.log(
        team_name + ' Vs. ' + bunny_name + ': ' +
        game.score + ' to ' + game.winner
      )
      ;
    } else {
      if (!team) {
        console.log('No team named ' + team_name + 'was found');
      }
      if (!bunny) {
        console.log('No bunny named ' + bunny_name + 'was found');
      }
    }
  }

  constructor(team, bunny) {
    this.score = 0;
    this.turn = 0;
    this.active = true;
    this.winner = null;

    this.bunny = new Bunny(this, bunny);
    this.eggs = [];

    this.team_name = team.name;
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
    if(this.renderer) {
      var game = this;
      this.process = setInterval(
        function() {
          game.take_turn();
        },
        config.turn_time
      )
    } else {
      while(this.active) {
        this.take_turn();
      }
    }
  }

  score_points(n) {
    if(this.active) {
      this.score += n;
    }
  }

  take_turn() {
    this.kids.forEach(function(kid) {
      kid.take_turn();
    });
    this.bunny.take_turn();
    if(this.renderer) {
      this.renderer.render();
      if(!this.active) {
        clearInterval(this.process)
      }
    }
    if(this.turn > config.match_limit) {
      this.winner = 'bunny';
      this.end();
    }
    this.turn += 1;
  }

  end() {
    this.active = false;
  }

}
