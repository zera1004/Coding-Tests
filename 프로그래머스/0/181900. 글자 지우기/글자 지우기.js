function solution(my_string, indices) {
    let result = [];
    indices.sort((a,b) => a-b);
    my_string.split('').forEach((i,j) => {
        if(!indices.includes(j)) result.push(i);
    })
    return result.join('');
}