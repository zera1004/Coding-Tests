function solution(common) {
    let num1 = common[1] - common[0];
    let num2 = common[2] - common[1];
    return num1 === num2? common[common.length-1] + num1: common[common.length-1] * (common[1]/common[0]);
}