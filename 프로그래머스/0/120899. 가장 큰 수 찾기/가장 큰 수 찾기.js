function solution(array) {
    let result = [0,0];
    let array2 = [];
    for(let i = 0; i < array.length; i++) array2.push(array[i])
    result[0] = array.sort((a,b) => b-a)[0];
    result[1] = array2.findIndex(i => i === result[0]);
    return result;
}