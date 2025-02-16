def solution(my_string):
    result = []
    for i in range(0, len(my_string)):
        result.append(my_string[i:])
    result.sort()
    return result