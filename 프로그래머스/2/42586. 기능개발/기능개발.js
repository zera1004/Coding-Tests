function solution(progresses, speeds) {
    let result = [];
    let day = 0;
    let endProgress = 0;
    let stack = 0;
    while(true) {
        for(let i = endProgress; i < progresses.length; i++) {
            if(progresses[i] + (day * speeds[i]) >= 100) {
                stack++;
                endProgress++;
            } else if(stack != 0) {
                result.push(stack);
                stack = 0;
                break;
            } else break;
        }
        if(stack != 0) {
            result.push(stack);
            stack = 0;
            break;
        }
        day++;
        if(endProgress === progresses.length) break;
    }
    return result;
}