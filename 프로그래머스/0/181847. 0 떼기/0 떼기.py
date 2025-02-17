def solution(n_str):
    for i,j in enumerate(n_str):
        if j != '0':
            return n_str[i:]