function solution(dots) {
    if(slope(dots[0],dots[1]) === slope(dots[2],dots[3])) return 1;
    if(slope(dots[0],dots[2]) === slope(dots[1],dots[3])) return 1;
    if(slope(dots[0],dots[3]) === slope(dots[1],dots[2])) return 1;
    return 0;
}

function slope(arr1, arr2) {
    return (arr1[1] - arr2[1]) / (arr1[0] - arr2[0]);
}