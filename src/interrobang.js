"use strict";

(function(exports){
  function interrobang(exclaim_func, question_func, string) {
    return exclaim_func(question_func(string));
  }
  exports.interrobang = interrobang;
})(this)
