function solution(elements) {
    let result = [];
    for(let i = 1; i <= elements.length; i++) { // i는 배열 길이
        for(let j = 0; j < elements.length; j++) { // j는 index 시작위치
            let temp = [];
            if (elements.length < i + j) temp = [...elements.slice(j), ...elements.slice(0, i - (elements.length - j))]
            else temp = elements.slice(j, j + i)
            result.push(temp.reduce((a,b) => a + b, 0))
        }
    }
    return [...new Set(result)].length
}

// index 위치 4이고 length 2일때
// 2- (elements.length -4)
// index 위치 3이고 length 4일때
// 4 - (elements.length -3)