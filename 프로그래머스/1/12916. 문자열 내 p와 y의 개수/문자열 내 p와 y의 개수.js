function solution(s){
    let pNum = 0;
    let yNum = 0;
    
    s.split('').forEach(i => {
        if(i === 'p' || i === 'P') pNum++;
        if(i === 'y' || i === 'Y') yNum++;
    })
    if(pNum === yNum) return true;
    return false;
}