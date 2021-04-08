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

// 1470. Shuffle the Array

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

var shuffle = function (nums, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
};

// 1748. Sum of Unique Elements

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

var sumOfUnique = function (nums) {
  let sum = 0;
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] ? (count[nums[i]] += 1) : (count[nums[i]] = 1);
  }
  let countEntries = Object.entries(count);
  for (let j = 0; j < countEntries.length; j++) {
    if (countEntries[j][1] === 1) {
      sum += Number(countEntries[j][0]);
    }
  }
  return sum;
};

// 1342. Number of Steps to Reduce a Number to Zero

// Given a non-negative integer num, return the number of steps to reduce it to zero.
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Example 1:

// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.

var numberOfSteps = function (num) {
  let count = 0;
  const countStep = (num, count) => {
    if (num === 0) return count;
    return num % 2 === 0
      ? countStep(num / 2, count + 1)
      : countStep(num - 1, count + 1);
  };
  return countStep(num, count);
};

// factorial

// 재귀함수
const factorial = num => {
  if (num === 0) return 0;
  if (num === 1) return 1; //재귀에서 basecase
  return (num *= factorial(num - 1));
};

const factorial2 = num => {
  let result;
  num === 0 ? (result = 0) : (result = 1);
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// 1672. Richest Customer Wealth

//Example 2:

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.

var maximumWealth = function (accounts) {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < accounts.length; i++) {
    // accounts[i]사람을 접근

    for (let j = 0; j < accounts[i].length; j++) {
      // accounts[i]사람의 은행들 접근
      sum += accounts[i][j]; // i 사람의 은행잔고 총합구하기
    }

    if (sum > max) max = sum; // 가장 높은 전재산값 저장하기
    sum = 0; // 다음 i 사람의 은행잔고 총합을 구하기전 초기화
  }
  return max;
};
