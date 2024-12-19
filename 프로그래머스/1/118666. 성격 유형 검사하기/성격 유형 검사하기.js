function solution(survey, choices) {
    let temp = {
        RT: 0,
        CF: 0,
        JM: 0,
        AN: 0,    
    }
    let result = [];
    survey.forEach((i,j) => {
        if(i == 'RT') temp.RT += (4-choices[j]);
        if(i == 'TR') temp.RT -= (4-choices[j]);
        if(i == 'CF') temp.CF += (4-choices[j]);
        if(i == 'FC') temp.CF -= (4-choices[j]);
        if(i == 'JM') temp.JM += (4-choices[j]);
        if(i == 'MJ') temp.JM -= (4-choices[j]);
        if(i == 'AN') temp.AN += (4-choices[j]);
        if(i == 'NA') temp.AN -= (4-choices[j]);
    })
    console.log(temp)
    result[0] = temp.RT >= 0 ? 'R': 'T';
    result[1] = temp.CF >= 0 ? 'C': 'F';
    result[2] = temp.JM >= 0 ? 'J': 'M';
    result[3] = temp.AN >= 0 ? 'A': 'N';
    return result.join('')
}