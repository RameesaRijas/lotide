const assert = require("chai").assert;
const tail = require('../tail');



describe('#tail', () => {

  it('should return Lighthouse, Hello when ["Hello", "Lighthouse", "Hello"]', () => {

    assert.deepEqual(tail(["Hello", "Lighthouse", "Hello"]), ["Lighthouse", "Hello"]);

  });

  it('should return Hello when passed ["Lighthouse", "Hello"]', () => {

    assert.deepEqual(tail(["Lighthouse", "Hello"]), ["Hello"]);

  });

  it('should return [] for empty item', () => {

    assert.deepEqual(tail([]), []);

  });

  it('should return [] for only 1 item', () => {

    assert.deepEqual(tail([1]), []);

  });
  it('should return [3, 4] for [1, 2, 3, 4, 5]', () => {

    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);

  });
});