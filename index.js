function receivesAFunction(callback) {
    return callback(5)
  }


  function returnsANamedFunction() {
    return function what(){};
  }

  function returnsAnAnonymousFunction() {
    return () => {};
  }