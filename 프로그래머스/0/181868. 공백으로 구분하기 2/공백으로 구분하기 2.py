def solution(my_string):
    temp = ''
    result = []
    for i in my_string:
        if i != ' ':
            temp += i
        else:
            result.append(temp)
            temp = ''
    result.append(temp)
    return list(filter(lambda x: x != '', result))