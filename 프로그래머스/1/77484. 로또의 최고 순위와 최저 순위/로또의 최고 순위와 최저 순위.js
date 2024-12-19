function solution(lottos, win_nums) {
    let result = [0, 0]
    for (let i = 0; i < 6; i++) {
        if (lottos[i] === 0) result[1]++
        for (let j = 0; j < 6; j++) {
            if (lottos[i] === win_nums[j]) result[0]++
        }
    }
    return [7 - (result[0] + result[1]) >= 6? 6: 7 - (result[0] + result[1]),
            7 - result[0] >= 6? 6: 7 - result[0]]
}        