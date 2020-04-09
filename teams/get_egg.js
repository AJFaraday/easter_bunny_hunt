Teams.push(
  {
    name: 'get_egg',
    shared_storage: {
      sequence: 'aaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbb',
      take_step: function(api) {
        var char = api.shared_storage().sequence[api.turn()];
        if(char) {
          api[api.my_storage()['key'][char]]();
        }
      }
    },
    functions: [
      function(api) {
        // NW kid
        if(!api.my_storage()['key']) {
          api.my_storage()['key'] = {'a': 'east', 'b': 'south'}
        }
        api.shared_storage().take_step(api);
      },
      function(api) {
        // NE kid
        if(!api.my_storage()['key']) {
          api.my_storage()['key'] = {'a': 'south', 'b': 'west'}
        }
        if (api.turn() == 49) {
          api.north();
        }
        if (api.turn() >= 51) {
          api.south();
        }
        api.shared_storage().take_step(api);
      },
      function(api) {
        // SE kid
        if(!api.my_storage()['key']) {
          api.my_storage()['key'] = {'a': 'west', 'b': 'north'}
        }
        if (api.turn() == 49) {
          api.west();
        }
        if (api.turn() >= 51) {
          api.north();
        }
        api.shared_storage().take_step(api);
      },
      function(api) {
        // SW kid
        if(!api.my_storage()['key']) {
          api.my_storage()['key'] = {'a': 'north', 'b': 'east'}
        }
        if (api.turn() >= 49) {
          api.east();
        }
        api.shared_storage().take_step(api);
      }
    ]
  }
);
