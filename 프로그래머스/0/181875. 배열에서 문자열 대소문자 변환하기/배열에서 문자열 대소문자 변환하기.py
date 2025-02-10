def solution(strArr):
    return list(map(lambda x: ''.join(list(map(lambda y: y.lower() if x[0] % 2 == 0 else y.upper(), x[1]))), enumerate(strArr)))