def solution(myString):
    return ''.join(list(map(lambda x: 'l' if x < 'l' else x, myString)))