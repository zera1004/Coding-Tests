function solution(k, dungeons) {
    let maxDungeons = 0;

    function explore(currentFatigue, count, visited) {
        maxDungeons = Math.max(maxDungeons, count);

        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && currentFatigue >= dungeons[i][0]) {
                visited[i] = true;
                explore(currentFatigue - dungeons[i][1], count + 1, visited);
                visited[i] = false;
            }
        }
    }

    explore(k, 0, Array(dungeons.length).fill(false));
    return maxDungeons;
}