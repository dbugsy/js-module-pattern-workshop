describe("exclaim", function() {
  it("should add an exclamation mark to passed string", function() {
    expect(exclaim("hello")).toEqual("hello!");
  });

  it("should add an exclamation mark to passed string", function() {
    expect(exclaim("yo")).toEqual("yo!");
  });
});
