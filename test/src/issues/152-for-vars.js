
function typedArrayTest(mode) {
  var gpu = new GPU({ mode: mode });

  const kernel = gpu.createKernel(function() {
    for (var sum=0, i=0; i<2; i++) {
      sum += i;
    }
    return sum;
  }).setDimensions([1, 1]).setDebug(true);

  var result = kernel();
  QUnit.assert.equal(result.length, 1);
  QUnit.assert.equal(result[0], 1);
}

QUnit.test('Issue #152 - for vars cpu', function() {
  typedArrayTest('cpu');
});

QUnit.test('Issue #152 - for vars gpu', function() {
  typedArrayTest('gpu');
});