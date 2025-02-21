def solution(num_list, n):
    result = []
    temp = []
    num = 0
    for i in num_list:
        temp.append(i)
        num += 1
        if num == n:
            result.append(temp)
            temp = []
            num = 0
    return result