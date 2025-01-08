function solution(board) {
    let result = board.map(i => i.slice());
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === 1) {
                for(let k = i - 1; k <= i + 1; k++){
                    for(let l = j - 1; l <= j + 1; l++) {
                        if(k >= 0 && k < board.length && l >= 0 && l < board[0].length) result[k][l] = 1;
                    }
                }
            }
        }
    }
    return result.length * result[0].length - result.reduce((a,b) => a + b.reduce((c,d) => c + d,0),0)
}