function solution(quiz) {
    return quiz.map(i => {
        let temp = i.split(' ');
        let result;
        if (temp[1] === '-') {
            result = (+temp[0] - +temp[2] === +temp[4]);
        } else {
            result = (+temp[0] + +temp[2] === +temp[4]);
        }
        return result === true? 'O': 'X'
    })
}