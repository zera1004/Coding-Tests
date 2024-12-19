function solution(babbling) {
    let can = ['aya', 'ye', 'woo', 'ma'];
    let result = 0;
    for (let i = 0; i < babbling.length; i ++) {
        let temp = '';
        let temp2= '';
        for (let j = 0; j < babbling[i].length; j++) {
            temp += babbling[i][j];
            if ( can.includes(temp) ) {
                if (temp === temp2){
                    break;
                }
                temp2 = temp;
                temp = '';
            }
            if ( temp.length >= 3) {
                if (!can.includes(temp)) {
                    break;
                }
            }
        }
        if (temp === '' & temp2 != '') result++;
    }
    return result;
}