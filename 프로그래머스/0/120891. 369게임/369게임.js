function solution(order) {
    return String(order).split('').reduce((a,b) => {
        if(b === '3'|| b === '6' || b === '9') return a+1
        return a
    },0)
}