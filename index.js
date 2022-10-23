function receivesAFunction (cb) {
    console.log(cb());
  }
  
  receivesAFunction(function () { return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"});


  
  

  function returnsANamedFunction(){
    return function ANamedFunction(){};
  }
  

  function returnsAnAnonymousFunction() {
    return function () {
        console.log('I am anonymous.')
    }
}
