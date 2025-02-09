def solution(arr1, arr2):
    if len(arr1) > len(arr2):
        return 1
    elif len(arr2) > len(arr1):
        return -1
    result1, result2 = 0, 0
    for i in range(0,len(arr1)):
        result1 += arr1[i]
        result2 += arr2[i]
    return 1 if result1 > result2 else -1 if result1 < result2 else 0