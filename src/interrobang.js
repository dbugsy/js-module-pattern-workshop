"use strict";

(function(exports){

  function interrobang(exclaim_func, questionObj, string) {
    question = new questionObj(string);
    
    return exclaim_func(question);
  }


  exports.interrobang = interrobang;

})(this)
