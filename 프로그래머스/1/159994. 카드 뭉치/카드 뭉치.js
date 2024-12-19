function solution(cards1, cards2, goal) {
    let len1 = 0
    let len2 = 0
    for (let i = 0; i < goal.length; i++) {
        if (cards1[len1] !== goal[i] && cards2[len2] !== goal[i]) return "No";
        if (cards1[len1] === goal[i]) {
            len1++;
            continue;
        }
        if (cards2[len2] === goal[i]) {
            len2++;
            continue;
        }
    }
    return "Yes";
}