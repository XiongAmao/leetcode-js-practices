/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let idx = 0;

  while (idx < nums.length) {
    if (nums[idx] === val) {
      nums.splice(idx, 1);
    } else {
      idx++;
    }
  }

  return nums.length;
};

var removeElement2 = function (nums, val) {
  let idx = nums.length - 1;
  while(idx >= 0) {
    if (nums[idx] === val) {
      nums.splice(idx, 1);
    }
    idx--;
  }
  return nums.length;
};

module.exports = [
  removeElement,
  removeElement2
];
