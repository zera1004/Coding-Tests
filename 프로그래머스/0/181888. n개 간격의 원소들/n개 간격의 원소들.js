function solution(num_list, n) {
    return num_list.filter((i,j) => j % n ==0)
}