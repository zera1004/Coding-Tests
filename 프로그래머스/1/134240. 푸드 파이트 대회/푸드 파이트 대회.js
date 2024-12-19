function solution(food) {
    let result = '';
    for (let i = 1; i < food.length; i++) {
        for (let j = 0; j < (food[i] % 2 == 0? food[i]/2 : (food[i]-1)/2); j++) {
            result += i;
        }
    }
    return result + '0' + result.split('').sort((a,b) => b-a).join('')
}