function solution(num_list) {
    let result1 = 0;
    let result2 = 0;
    for(let i = 0; i < num_list.length; i++){
        if (i % 2 == 0) result1 += num_list[i];
        else result2 += num_list[i]
    }
    return result1 > result2 ? result1 : result2
    
}