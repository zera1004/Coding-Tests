function solution(id_pw, db) {
    let ch_id = false;
    let ch_pw = false;
    for (let i = 0; i < db.length; i++) {
        if(id_pw[0] === db[i][0]) {
            ch_id = true;
            if(id_pw[1] === db[i][1])
                ch_pw = true;
            break;
        }
    }
    if (ch_pw) return 'login';
    if (ch_id) return 'wrong pw';
    return 'fail'
}