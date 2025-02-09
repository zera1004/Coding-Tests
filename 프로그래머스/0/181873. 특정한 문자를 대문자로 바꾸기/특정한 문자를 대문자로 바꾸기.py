def solution(my_string, alp):
    return ''.join(list(map(lambda x: x.upper() if x == alp else x, my_string)))