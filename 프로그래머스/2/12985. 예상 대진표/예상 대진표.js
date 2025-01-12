function solution(n,a,b)
{
    for(let i = 0; i < n/2; i++) {
        if(a % 2 === 1) a++;
        if(b % 2 === 1) b++;
        if(a === b) return i+1;
        a /= 2;
        b /= 2;
    }
}