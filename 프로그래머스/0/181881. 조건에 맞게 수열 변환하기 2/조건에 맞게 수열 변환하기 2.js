function solution(arr) {
    let arr1 = arr.slice();
    let arr2 = []
    let repeat = 0;
    while(true){
        let replay = false;
        arr2 = arr1.map(i => {
            if(i >= 50 && i % 2 === 0) {
                replay = true;
                return i / 2;
            }
            else if(i < 50 && i % 2 === 1) {
                replay = true;
                return i * 2 + 1;   
            }
            return i;
        });
        
        if(replay === false) break;
        repeat++;
        arr1 = arr2.slice();
    }
    return repeat;
}