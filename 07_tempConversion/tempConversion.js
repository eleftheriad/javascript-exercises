const ftoc = function(temp_in_F) {
  let temp_in_C = (temp_in_F - 32) * 5/9;
  temp_in_C = Math.round(temp_in_C * 10) / 10
  return temp_in_C
};

const ctof = function(temp_in_C) {
  let temp_in_F = (temp_in_C * 9/5) + 32;
  temp_in_F = Math.round(temp_in_F * 10) / 10
  return temp_in_F
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
