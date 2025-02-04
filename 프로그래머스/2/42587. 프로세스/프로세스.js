function solution(priorities, location) {
    let result;
    let arr = priorities.slice();
    arr.sort((a,b) => b - a);
    let count = 0;
    let loc = location;
    while(true) {
        let temp = priorities.indexOf(arr[0])
        if(temp === loc) {
            return count + 1;
        }
        if(loc < temp) {
            loc = priorities.length - 1 - temp + loc;
        } else if (loc > temp) {
            loc = loc - 1 - temp;
        }
        priorities = priorities.slice(temp + 1).concat(priorities.slice(0,temp));
        count++;
        arr = arr.slice(1)
    }
}
