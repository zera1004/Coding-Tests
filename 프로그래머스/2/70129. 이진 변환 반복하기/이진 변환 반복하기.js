function solution(s) {
    s = String(s)
    let result = [0,0];
    while(s !== '1') {
        s = s.split('').filter(i => {
            if(i === '0') result[1]++;
            return i !== '0'
        }).length;
        let binary = '';
        while(s > 0) {
            binary = (s % 2) + binary;
            s = Math.floor(s / 2);
        }
        s = binary;
        result[0]++;
    }
    return result;
}