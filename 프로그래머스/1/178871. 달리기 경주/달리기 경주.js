function solution(players, callings) {
    let temp = '';
    let result1 = {}; // 숫자가 key값
    let result2 = {}; // 이름이 key값
    
    players.forEach((i,j) => {
        result1[j] = i;
        result2[i] = j
    })
    callings.forEach((i,j) => {
        let name1 = result1[result2[i]]
        let name2 = result1[result2[i] - 1]
        let num1 = result2[name1];
        let num2 = result2[name2];
        
        result1[num1] = name2;
        result1[num2] = name1;
        result2[name1] = num2;
        result2[name2] = num1;
    })
    return Object.values(result1);
}