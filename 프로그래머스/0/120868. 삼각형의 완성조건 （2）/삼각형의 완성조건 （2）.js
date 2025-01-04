function solution(sides) {
    let num = 0;
    sides.sort((a, b) => a - b);
    for(let i = 1; i < sides[0] + sides[1]; i++) {
        if(i >= sides[1] && i < sides[0] + sides[1]) num++;
        else if(i < sides[1] && sides[1] < sides[0] + i) num++;
    }
    return num;
}