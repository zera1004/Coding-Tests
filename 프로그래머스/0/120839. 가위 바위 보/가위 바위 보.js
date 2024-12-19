function solution(rsp) {
    return rsp.split('').map( i => {
        if(i==='2') return 0;
        if(i==='0') return 5;
        if(i==='5') return 2;
    }).join('')
}