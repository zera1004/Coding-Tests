def solution(todo_list, finished):
    return list(map(lambda x: x[1],list(filter(lambda x: finished[x[0]] == False,enumerate(todo_list)))))