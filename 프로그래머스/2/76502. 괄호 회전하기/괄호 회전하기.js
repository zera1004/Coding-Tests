function solution(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        let str = s.slice(i) + s.slice(0, i);
        let temp = '';
        for(let j = 0; j < str.length; j++) {
            if(str[j] === '(') temp += str[j];
            if(str[j] === '[') temp += str[j];
            if(str[j] === '{') temp += str[j];
            
            if(str[j] === ')') {
                if(temp[temp.length -1] === '(') temp = temp.slice(0, temp.length - 1);
                else {
                    temp += 'F';
                    break;
                };
            }
            if(str[j] === ']') {
                if(temp[temp.length -1] === '[') temp = temp.slice(0, temp.length - 1);
                else {
                    temp += 'F';
                    break;
                };
            }
            if(str[j] === '}') {
                if(temp[temp.length -1] === '{') temp = temp.slice(0, temp.length - 1);
                else {
                    temp += 'F';
                    break;
                };
            }
        }
        if (temp.length === 0) count++;
    }
    return count;
}