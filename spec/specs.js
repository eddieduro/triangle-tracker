describe('triangleTracker', function() {
  it("is false for a triangle that has no sides equal", function () {
    expect(triangleTracker(1, 3, 2)).to.equal(false);
  });

  it("is true for a triangle that has 2 sides that are less than or equal to the 3rd side", function() {
    expect(triangleTracker(2,2,4)).to.equal(true);
  });

  it("is true for a triangle that has 3 equal sides", function() {
    expect(triangleTracker(3,3,3)).to.equal(true);
  });
});
