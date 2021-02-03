/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     try {
//       nums.forEach((item, index) => {
//         nums.forEach((subItem, subIndex) => {
//           if (item + subItem === target && index !== subIndex) {
//             throw [index, subIndex]
//           } 
//         })
//       })
//     } catch (e) {
//       return e
//     }
// };
var twoSum = function(nums, target) {
  const map = {}
  try {
    nums.forEach((item, index) => {
      if (map[target - item] !== undefined) {
        throw [map[target - item], index]
      }
      map[item] = index
    })
  } catch (e) {
    return e
  }
};
// console.log(twoSum([3, 2, 4], 6))

/**
 * 2 两数相加
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const result = []
    const arr1 = l1.length > l2.length ? l1 : l2
    const arr2 = l1.length > l2.length ? l2 : l1
    arr1.forEach((item ,index) => {
      // 相同index项合计值
      const currentNum = (item + (arr2[index] || 0))
      // 余数赋值
      result[index] = currentNum % 10
      // 商赋值给下一项
      if (Math.floor(currentNum / 10)) {
        arr1[index + 1] = Math.floor(currentNum / 10) + arr1[index + 1]
      }
    })
    return result
};
// console.log(addTwoNumbers([2,4,3], [2,5,6,4]))
var addTwoNumbers = function(l1, l2) {
  const head = new ListNode(0)
  let linkList = head
  let carry = 0
  while (l1 || l2) {
    const x = l1 ? l1.val : 0
    const y = l2 ? l2.val : 0
    const currentNum = x + y + carry
    linkList.next = new ListNode(currentNum % 10)
    // 进位
    carry = Math.floor(currentNum / 10)
    // 指向下一个指针
    linkList = linkList.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if (carry > 0) {
    linkList.next = new ListNode(carry)
  }
  return head.next
};


var singleNumber = function(nums) {
  let set = new Set()
  let size = set.size
  for (let i=0; i<nums.length; i++) {
      if (set.add(nums[i]).size === size) {
          set.delete(nums[i])
      }
      size = set.size
  }
  console.log(set[0])
  return set[0]
};
singleNumber([2,2,1])




