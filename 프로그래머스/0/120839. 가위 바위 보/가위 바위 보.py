def solution(rsp):
    return ''.join(list(map(lambda x: '0' if x == '2' else '5' if x == '0' else '2', rsp)))