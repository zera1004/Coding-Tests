function solution(s, n) {
    let result = '';
    for (let i =0; i <s.length; i++) {
        let charCode = s.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode = (charCode + n - 65) % 26 + 65;
        }
        if (charCode >= 97 && charCode <= 122) {
            charCode = (charCode + n - 97) % 26 + 97
        }
        result += String.fromCharCode(charCode);
    }
    return result;
}