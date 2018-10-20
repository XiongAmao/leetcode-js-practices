/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var idx1;
    var idx2;
    
    if (nums.length === 2 && nums[0] + nums[1] === target) {
        return [0, 1]
    }
    
    for(var t = 0; t < nums.length; t++) {
        idx1 = t
        for (var e = t + 1; e < nums.length; e++) {
            if (target - nums[t] - nums[e] === 0) {
                idx2 = e
                return [idx1, idx2]
            }
        }
    }
};

