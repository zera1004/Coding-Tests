def solution(numbers):
    numbers.sort()
    a = numbers[0] * numbers[1]
    b = numbers[len(numbers) - 2] * numbers[len(numbers) - 1]
    return a if a > b else b