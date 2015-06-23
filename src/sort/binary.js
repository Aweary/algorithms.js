function binarySort(collection, target, callback, minimum, maximum) {

  // Get the starting and ending points
  var min = minimum || 0;
  var max = maximum || collection.length;

  // Get the median value and the value at that index
  var median = Math.floor((min + max) / 2);
  var result = collection[median];

  console.log('Min is %j, Max is %j, median is %j', min, max, median);

  // If we've found our target, return the index
  if (result === target) {
    callback(median);
    return;
  }

  // Otherwise, split the array one way or the other and recurse
  else if (result > target) {
    max = median;
    console.log('%j greater than %j', result, target);
  }

  else if (result < target) {
    min = median;
		console.log('%j less than %j', result, target);
  }

  binarySort(collection, target, callback, min, max);

}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

binarySort(arr, 2, function(result) {
  console.log(result);
})
