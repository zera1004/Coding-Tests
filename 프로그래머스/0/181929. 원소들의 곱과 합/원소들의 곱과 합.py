def solution(num_list):
    add = 0
    mul = 1
    for i in num_list:
        add += i
        mul *= i
        
    return 1 if mul < add**2 else 0