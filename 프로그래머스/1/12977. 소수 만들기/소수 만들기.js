function solution(nums) {
    let result = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++){
            for (let k = j + 1; k < nums.length; k++) {
                let nnC = 0;
                for (let nn = 1; nn <= (nums[i]+nums[j]+nums[k]); nn++) {
                    if ((nums[i]+nums[j]+nums[k]) % nn === 0) nnC++;
                }
                if (nnC === 2) result++;
            }
        }
    }
    
    return result
}