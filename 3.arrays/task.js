function compareArrays(arr1, arr2) {
  let result = (arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]));
  return result;
}

function advancedFilter(arr) {
  let resultArr = arr.filter((positive) => positive > 0)
    .filter ((multipe) => multipe % 3 === 0)
    .map ((multiplied) => multiplied * 10)
  return resultArr;
}
