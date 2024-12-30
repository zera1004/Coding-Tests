function solution(before, after) {
    let result = 1;
    after.split('').forEach((i,j) => {
        let stringExist = before.indexOf(i)
        if(stringExist === -1) result = 0;
        if(stringExist !== -1) before = before.slice(0, stringExist) + before.slice(stringExist + 1);
    })
    return result;
}