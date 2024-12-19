function solution(myString) {
    return myString.split('').map(i => {
        if(i < 'l') return 'l'
        return i;
    }).join('')
}