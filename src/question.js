
"use strict";
(function(exports){
  var QUESTION_MARK_COUNT = 2;

  function Question(text) {
    this.text = text;
  }

  function addQuestionMarks(string){
    return string + "?".repeat(QUESTION_MARK_COUNT);
  }

  function toString(){
    return addQuestionMarks(this.text);
  }

  exports.Question = Question;

  Question.prototype.toString = toString;
})(this);
