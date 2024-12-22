function solution(numbers) {
    let str = {"zero": '0', "one": '1', "two": '2', "three": '3', "four": '4', "five": '5', "six": '6', "seven": '7', "eight": '8', "nine": '9'};
    let result = "";
    let temp = "";
    for (let i = 0; i < numbers.length; i++) {
        temp += numbers[i];
        let test = Object.keys(str).indexOf(temp);
        if(test != -1) {
            result += str[temp];
            temp = "";
        }
    }
    return +result
}