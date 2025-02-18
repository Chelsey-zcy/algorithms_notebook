//给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
//子数组是数组中元素的连续非空序列
function subarraySum(nums: number[], k: number): number {
    let sum = 0
    let count = 0
    let mp = new Map<number, number>()
    mp.set(0, 1)
    for (let i = 0; i < nums.length; i++){
      sum += nums[i]
    ////  mp.set(nums[i], 0)
      if (mp.has(sum - k)) {
        count +=1
      }
    }
    return count
};


const array = [1, 2, 3]

console.log(subarraySum(array, 3), "test")
