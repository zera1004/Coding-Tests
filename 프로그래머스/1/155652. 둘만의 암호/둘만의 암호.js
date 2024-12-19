function solution(s, skip, index) {
    return s.split('').map(i => {
        let result = i.charCodeAt();
        for(let j = 0; j < index; j++) {
            result++;
            result = result > 122 ? 97 + (result - 123) : result
            while(true) {
                if(skip.includes(String.fromCharCode(result))) {
                    result++;
                    result = result > 122 ? 97 + (result - 123) : result
                } else break;
            }
        }
        return String.fromCharCode(result);
    }).join('')
}