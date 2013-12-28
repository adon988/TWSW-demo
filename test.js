var add = require("./add");
var assert = require("assert");

describe('Add', function() {
  it('should return 2 when 1 + 1', function() {
    assert.equal(2, add(1, 1));
  });
});
