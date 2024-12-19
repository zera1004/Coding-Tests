function solution(my_string) {
    return my_string.split('').map(i => {
        if (i>='a' && i<='z') return i.toUpperCase()
        if (i>='A' && i<='Z') return i.toLowerCase()
    }).join('')
}