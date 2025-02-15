def solution(arr, idx):
    for i,j in enumerate(arr):
        if j == 1 and i >= idx:
            return i
    return -1