function solution(spell, dic) {
    return dic.some(i => i.split('').sort().join('') === spell.sort().join(''))? 1: 2;
}