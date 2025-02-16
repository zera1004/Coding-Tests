def solution(binomial):
    split = binomial.split(' ')
    if split[1] == '+':
        return int(split[0]) + int(split[2])
    elif split[1] == '-':
        return int(split[0]) - int(split[2])
    elif split[1] == '*':
        return int(split[0]) * int(split[2])