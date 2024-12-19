function solution(a, b) {
    let date = new Date(`2016-${a}-${b}`);
    let day = date.getDay();
    let dayList = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    console.log(day)
    return dayList[day]
}