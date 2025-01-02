function solution(s) {
    let space = true;
    return s.split('').map(i => {
        if(i === ' ') {
            space = true;
            return i
        }
        if(space === true) {
            space = false;
            return i.toUpperCase();
        }
        if(space === false) {
            return i.toLowerCase();
        }
        
        return i;
    }).join('')
}