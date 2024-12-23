function solution(today, terms, privacies) {
    let todayArr = today.split('.'); // today '.'기준으로 배열 만듬
    let result = [];
    privacies.forEach((i,j) => {
        let dateArr = privacies[j].slice(0, 10).split('.'); // privacies '.'기준으로 배열 만듬
        let period = privacies[j].slice(privacies[j].length-1); // privacies 끝에 문자
        terms.forEach((k,l) => {
            if(k.slice(0,1) === period) {
                let temp = 0;
                let temp2 = 0;
                if(+dateArr[2] > 28) dateArr[2] = 28
                dateArr[2] = +dateArr[2] - 1;
                if(dateArr[2]> 0 && dateArr[2] < 10) dateArr[2] = '0' + String(dateArr[2])
                if(dateArr[2] === 0) {
                    dateArr[2] = String(28);
                    temp = 1;
                }
                dateArr[1] = +dateArr[1] + +k.split(' ')[1];
                if(temp === 1) dateArr[1] -= 1;
                if(dateArr[1] > 12) {
                    temp2 = Math.floor((dateArr[1]-1) / 12);
                    dateArr[1] = String((dateArr[1]-1) % 12 + 1);
                }
                if(dateArr[1]> 0 && dateArr[1] < 10) dateArr[1] = '0' + String(dateArr[1])
                dateArr[0] = String(+dateArr[0] + temp2);
                dateArr[1] = String(dateArr[1])
                dateArr[2] = String(dateArr[2])
                if (+todayArr[0] > +dateArr[0]) result.push(j+1);
                if (todayArr[0] === dateArr[0] && +todayArr[1] > +dateArr[1]) result.push(j+1);
                if (todayArr[0] === dateArr[0] && todayArr[1] === dateArr[1] && +todayArr[2] > +dateArr[2]) result.push(j+1);
            }
        })
    })
    return result
}