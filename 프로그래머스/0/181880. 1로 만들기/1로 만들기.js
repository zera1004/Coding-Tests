function solution(num_list) {
    let result = 0;
    num_list.forEach(i => {
        while(i != 1) {
            if(i % 2 === 0) i /= 2;
            else if(i % 2 === 1) i = (i-1)/2;
            result++;
        }
    })
    return result;
}