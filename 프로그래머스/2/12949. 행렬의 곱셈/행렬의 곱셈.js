function solution(arr1, arr2) {
    let result = [];
    for(let i = 0; i < arr1.length; i++) { // arr1[x][y]일때 x index
        let tempArr = [];
        for(let j = 0; j < arr2[0].length; j++) { // arr2[x][y]의 y index
            let tempNum = 0;
            for(let k = 0; k < arr1[0].length; k++) { // arr1[x][y]일때 y index, arr2[x][y]의 x index
                tempNum += arr1[i][k] * arr2[k][j]
            }
            tempArr.push(tempNum)
        }
        result.push(tempArr)
    }
    return result
}