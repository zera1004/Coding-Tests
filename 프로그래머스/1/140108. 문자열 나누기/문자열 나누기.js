function solution(s) {
    let result = 0;
    let x = 0;
    let Nx = 0;
    let tempN;
    for (let i = 0; i < s.length; i++) {
        if(x == 0) {
            tempN = s[i];
        }
        
        if (s[i] == tempN) x++;
        if (s[i] != tempN) Nx++;
        
        if(x == Nx) {
            result++;
            x = 0;
            Nx = 0;
        }
    }
    return x != 0 ? result +1: result
}