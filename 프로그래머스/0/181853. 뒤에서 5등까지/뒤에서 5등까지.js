function solution(num_list) {
    let result = [];
    num_list.sort((a,b) => a-b)
    for (let i =0; i< 5; i++) {
        result.push(num_list[i])
    }
    return result;
}