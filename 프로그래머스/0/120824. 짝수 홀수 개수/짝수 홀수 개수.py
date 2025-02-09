def solution(num_list):
    result = [0, 0]
    for i in num_list:
        if(i % 2 == 1):
            result[1] += 1
        else:
            result[0] += 1
    return result