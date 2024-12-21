function solution(order) {
    let result = 0;
    for (let i = 0; i < order.length; i++) {
        if(order[i].indexOf('americano') != -1 || order[i].indexOf('anything') != -1) result += 4500;
        if(order[i].indexOf('cafelatte') != -1) result += 5000;
    }
    return result
}