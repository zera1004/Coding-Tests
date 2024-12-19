function solution(wallpaper) {
    let temp = [];
    let result = [];
    for(let i = 0; i < wallpaper.length; i++) {
        wallpaper[i].split('').forEach((j,k) => {
            if(j === '#') temp.push({x:i, y:k})
        })
    }
    temp.sort((a, b) => a.x - b.x)
    result[0] = temp[0].x;
    result[2] = temp[temp.length-1].x + 1;
    temp.sort((a, b) => a.y - b.y)
    result[1] = temp[0].y;
    result[3] = temp[temp.length-1].y +1;
    return result
}

// [{x:5, y:2}, {}]