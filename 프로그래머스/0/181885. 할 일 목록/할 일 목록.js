function solution(todo_list, finished) {
    return todo_list.map((i,j) => {
        if (!finished[j]) return i;
    })
    .filter(i => i != null)
}