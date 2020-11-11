"use strict";

require("core-js/modules/es.array.includes");
require("core-js/stable");
require("regenerator-runtime/runtime");

var list = [1, 2, 3, 4];
var chk = list.includes(1);
console.log(chk);

var fn = function fn() {
  return 1;
};