function solution(s) {
    return s.split(' ').map(i => {
        return i.split('').map((j,k) => {
            if(k % 2 === 0) return j.toUpperCase();
            if(k % 2 === 1) return j.toLowerCase();
        }).join('');
    }).join(' ');
}