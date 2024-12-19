function solution(num_list) {
    let a = 1;
    let b = 0;
    num_list.forEach(i => {
        a *= i;
        b += i;
    })
    return a < b**2? 1: 0;
}