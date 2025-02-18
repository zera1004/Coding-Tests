def solution(my_string, m, c):
    return ''.join([j for i,j in enumerate(my_string) if (i+1-c) % m == 0])