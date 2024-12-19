function solution(answers) {
    let supo1 = [1, 2, 3, 4, 5];
    let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let supo1Num = 0;
    let supo2Num = 0;
    let supo3Num = 0;
    let result = [];
    
    answers.forEach((i,j) => {
        if(supo1[j % supo1.length] === i) supo1Num++;
        if(supo2[j % supo2.length] === i) supo2Num++;
        if(supo3[j % supo3.length] === i) supo3Num++;
    })
    let maxScore = Math.max(supo1Num, supo2Num, supo3Num);
    
    if(supo1Num === maxScore) result.push(1);
    if(supo2Num === maxScore) result.push(2);
    if(supo3Num === maxScore) result.push(3);
    
    return result;
}