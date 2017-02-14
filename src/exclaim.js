"use strict";
(function(exports){
  console.log(exports)
  function exclaim(string){
    return string + "!";
  }

  exports.exclaim = exclaim;
})(this)

