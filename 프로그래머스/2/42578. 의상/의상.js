function solution(clothes) {
    let dic = {};
    let result = 1;
    clothes.forEach((i) => {
        if(!dic[i[1]]) dic[i[1]] = [];
        dic[i[1]].push(i[0])
    })
    
    Object.values(dic).forEach(i => {
        result *= (i.length+1);
    })
    return result - 1;
}