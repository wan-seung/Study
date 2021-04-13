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

// 1512. Number of Good Pairs

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

var numIdenticalPairs = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        result++;
      }
    }
  }
  return result;
};

// 1528. Shuffle String

// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

var restoreString = function (s, indices) {
  // let result = new Array(indices.length).fill("");
  let result = [];
  for (let i = 0; i < indices.length; i++) {
    result[indices[i]] = s[i];
  }
  return result.join('');
};

// 771. Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

var numJewelsInStones = function (J, S) {
  let result = 0;
  for (let i = 0; i < J.length; i++) {
    for (let j = 0; j < S.length; j++) {
      if (J[i] === S[j]) {
        result++;
      }
    }
  }
  return result;
};

// 1365. How Many Numbers Are Smaller Than the Current Number

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

var smallerNumbersThanCurrent = function (nums) {
  let arr = [];
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        result++;
      }
    }
    arr.push(result);
    result = 0;
  }
  return arr;
};
