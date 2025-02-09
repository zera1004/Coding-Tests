def solution(n):
    result = 0
    for i in range(1,int(n**0.5) + 1):
        if n % i == 0:
            result += 2
        if i ** 2 == n:
            result -= 1
    return result