function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = arr.length-1; j >= 0; j--) {
            if (arr[i][j] != arr[j][i]) {
                console.log(i,j);
                return 0;
            }
        }
    }
    return 1;
}