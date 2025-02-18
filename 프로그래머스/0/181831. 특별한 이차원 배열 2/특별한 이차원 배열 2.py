def solution(arr):
    for i,j in enumerate(arr):
        for k,l in enumerate(j):
            if arr[i][k] != arr[k][i]:
                return 0
    return 1