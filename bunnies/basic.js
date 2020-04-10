Bunnies.push(
  {
    name: 'basic',
    storage: {},
    function: function(api) {
      var above = 0;
      var below = 0;
      var left = 0;
      var right = 0;
      var bunny = api.bunny();

      api.kids().forEach(
        function(kid) {
          if(kid.x < bunny.x) {
            left += 1;
          } else if (kid.x > bunny.x) {
            right += 1;
          }
          if(kid.y < bunny.y) {
            above += 1;
          } else if (kid.y > bunny.y) {
            below += 1;
          }
        }
      );

      api.hop(
        (left - right),
        (above - below)
      );
    }
  }
);