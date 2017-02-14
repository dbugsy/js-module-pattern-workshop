describe("question", function() {
  it("should add two question marks to passed string", function() {
    question = new Question("hello")
    expect(question.toString()).toEqual("hello??");
  });
});
