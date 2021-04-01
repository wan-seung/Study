// 1480. Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

var runningSum = function (nums) {
  let output = [];
  let value = 0;
  for (let i = 0; i < nums.length; i++) {
    value += nums[i];
    output.push(value);
  }
  return output;
};

var runningSum = function (nums) {
  let value = 0;
  return nums.map(el => (value += el));
};

// 1108. Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

var defangIPaddr = function (address) {
  let result = '';
  for (let i = 0; i < address.length; i++) {
    result += address[i] === '.' ? '[.]' : address[i];
  }
  return result;
};

var defangIPaddr = function (address) {
  return address.split('.').join('[.]');
};
