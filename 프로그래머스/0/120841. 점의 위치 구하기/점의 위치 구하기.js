function solution(dot) {
    return dot[1] > 0 ? dot[0] > 0 ? 1 : 2
            : dot[0] < 0 ? 3 : 4
}