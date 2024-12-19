function solution(num_list) {
    let result = 0;
    let o = '';
    let e = '';
    num_list.forEach((i,j) => {
        if(i % 2 == 1) o += String(i);
        if(i % 2 == 0) e += String(i);
        if(o.length + e.length -1 == j) result = +o + +e;
    })
    return result
}