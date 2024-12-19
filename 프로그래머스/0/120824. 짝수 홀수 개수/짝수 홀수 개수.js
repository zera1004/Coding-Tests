function solution(num_list) {
    result = [0,0];
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) result[0]++;
        if (num_list[i] % 2 === 1) result[1]++;
    }
    return result;
}