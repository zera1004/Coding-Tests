function solution(keymap, targets) {
    let result = [];
    for(let i = 0; i < targets.length; i++) {
        let temp = 0;
        for(let j = 0; j < targets[i].length; j++) {
            let temp2 = -1;
            for(let k = 0; k < keymap.length; k++) {
                if (keymap[k].indexOf(targets[i].split('')[j]) != -1 && temp2 == -1) {
                    temp2 = keymap[k].indexOf(targets[i].split('')[j]) + 1
                }
                if (keymap[k].indexOf(targets[i].split('')[j]) != -1 && temp2 != -1 && 
                   keymap[k].indexOf(targets[i].split('')[j]) < temp2) {
                    temp2 =  keymap[k].indexOf(targets[i].split('')[j]) + 1
                }
            }
            if (temp2 == -1) {
                temp = -1;
                break;
            }
            temp += temp2;
        }
        result[i] = temp
    }
    return result;
}