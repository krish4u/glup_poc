"use strict";

var arr = [2, 5, 9, 11, 1, 3];
var filteredArr = arr.filter(function (e) {
  return e > 5;
});
console.log(filteredArr);