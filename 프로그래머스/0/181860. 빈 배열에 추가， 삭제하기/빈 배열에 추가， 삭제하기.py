def solution(arr, flag):
    result = []
    for i in range(len(flag)):
        if flag[i] == True:
            result.extend([arr[i]] * arr[i] *2)
        else:
            result = result[:-arr[i]]
            
    return result