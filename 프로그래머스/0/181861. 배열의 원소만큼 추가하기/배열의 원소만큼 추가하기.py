def solution(arr):
    result = []
    for i in arr:
        for y in range(0, i):
            result.append(i)
            
    return result