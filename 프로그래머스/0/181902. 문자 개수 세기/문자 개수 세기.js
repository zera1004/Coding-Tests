function solution(my_string) {
    let arr = [];
    for (let i = 65; i <= 90; i++) {
        arr.push(String.fromCharCode(i))
    }
    for (let i = 97; i <= 122; i++) {
        arr.push(String.fromCharCode(i))
    }
    return arr.map(i => my_string.split(i).length-1)
}