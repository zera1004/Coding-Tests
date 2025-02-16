def solution(cipher, code):
    return ''.join([j for i,j in enumerate(cipher) if (i+1) % code == 0])