function solution(id_list, report, k) {
    report = [... new Set(report)];
    let reportedPeople = {};
    let temp = [];
    let result = {};
    id_list.forEach(i => {
        reportedPeople[i] = 0;
        result[i] = 0;
    })
    
    report.forEach(i => {
        i = i.split(' ');
        reportedPeople[i[1]]++;
    })
    
    for (key in reportedPeople) {
        if(reportedPeople[key] >= k) temp.push(key)
    }
    
    report.forEach(i => {
        i = i.split(' ');
        if(temp.indexOf(i[1]) !== -1) result[i[0]]++;
    })
    
    return Object.values(result);
}