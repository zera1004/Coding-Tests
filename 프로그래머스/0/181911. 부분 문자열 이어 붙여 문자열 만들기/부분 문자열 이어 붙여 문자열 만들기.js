function solution(my_strings, parts) {
    return my_strings.map((i,j) => i.slice(parts[j][0],parts[j][1]+1)).join('')
}