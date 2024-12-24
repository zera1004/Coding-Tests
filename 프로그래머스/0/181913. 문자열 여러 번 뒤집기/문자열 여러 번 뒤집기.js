function solution(my_string, queries) {
    for (let i = 0; i < queries.length; i++) {
        my_string = my_string.slice(0,queries[i][0]) + my_string.split('').slice(queries[i][0],queries[i][1]+1).reverse().join('') + my_string.slice(queries[i][1]+1)
    }
    return my_string;
}