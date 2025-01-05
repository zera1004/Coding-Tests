function solution(keyinput, board) {
    let result = [0, 0];
    keyinput.forEach(i => {
        switch(i) {
            case 'left':
                result[0]--;
                break;
            case 'right':
                result[0]++;
                break;
            case 'up':
                result[1]++;
                break;
            case 'down':
                result[1]--;
                break;
        }
        if(result[0] > (board[0] - 1)/2) result[0]--;
        if(result[0] < -(board[0] - 1)/2) result[0]++;
        if(result[1] > (board[1] - 1)/2) result[1]--;
        if(result[1] < -(board[1] - 1)/2) result[1]++;
    })
    
    
    return result;
}