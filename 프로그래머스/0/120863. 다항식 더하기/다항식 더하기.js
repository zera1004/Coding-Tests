function solution(polynomial) {
    let num = 0;
    let x = 0;
    polynomial = polynomial.split(' ');
    polynomial.forEach(i => {
        if(i[i.length -1] === 'x') {
            if(!Number(i.slice(0, i.length -1))) {
               x++;
               } else x += Number(i.slice(0, i.length -1));
        } else if(i === '+') {
        } else {
            num += Number(i)
        }
    })
    if(num === 0) return x !== 1? x + "x": "x"
    if(x === 0) return String(num);
    return x !== 1? x + "x" + " + " + num: "x" + " + " + num
}