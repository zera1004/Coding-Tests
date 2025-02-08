def solution(my_string):
    return ''.join(filter(lambda x: x not in 'aeiou', my_string))