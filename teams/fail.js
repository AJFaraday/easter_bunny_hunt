Teams.push(
  {
    name: 'fail',
    shared_storage: {},
    functions: [
      function(api) {
        // NW kid
        api.south();
      },
      function(api) {
        // NE kid
        api.south();
      },
      function(api) {
        // SE kid
        api.east();
      },
      function(api) {
        // SW kid
      }
    ]
  }
);
