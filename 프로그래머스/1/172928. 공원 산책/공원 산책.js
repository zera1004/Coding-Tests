function solution(park, routes) {
    let location = [];
    park = park.map((i,j) => {
        if(i.indexOf('S') !== -1) location = [j, i.indexOf('S')];
        return i.split('');
    })
    routes.forEach((i,j) => {
        i = i.split(' ')
        let temp = location.slice();
        let replay = false;
        for(let k = 0; k < +i[1]; k++) {
            switch (i[0]) {
                case 'E':
                    location[1]++
                    break;
                case 'W':
                    location[1]--
                    break;
                case 'N':
                    location[0]--
                    break;
                case 'S':
                    location[0]++
                    break;
            }
            if(location[0] < 0 || location[0] >= park.length || 
                location[1] < 0 || location[1] >= park[0].length || 
                park[location[0]][location[1]] === 'X') {
                replay = true;
                break;
            }
            if(replay === true) break;
        }
        if(replay === true) location = temp.slice();
    })
    return location;
}