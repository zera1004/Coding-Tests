function solution(ingredient) {
    let result = 0;
    let temp = [];
    
    for(let i = 0; i < ingredient.length; i++) {
        temp.push(ingredient[i])
        if (temp.slice(temp.length-4).join('') == '1231') {
            result++;
            temp.splice(-4, 4)
        }
    }
    return result;
}