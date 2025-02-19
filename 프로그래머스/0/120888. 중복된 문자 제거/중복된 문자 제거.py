def solution(my_string):
    check_str = ''
    result = ''
    for i in my_string:
        if i not in check_str:
            check_str += i
            result += i
    
    return result