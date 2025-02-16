def solution(my_strings, parts):
    return ''.join(list(map(lambda x: x[1][parts[x[0]][0]:parts[x[0]][1]+1], enumerate(my_strings))))