function solution(num_list) {
    let result = 0;
    if (num_list.length >= 11) {
        for(let i = 0; i < num_list.length; i++) {
            result += num_list[i];
        }
        return result;
    } else {
        result = 1;
        for(let i =0; i < num_list.length; i++) {
            result *= num_list[i];
        }
        return result;
    }
}