def solution(absolutes, signs):
    result = 0
    for i,j in enumerate(absolutes):
        if signs[i] == True:
            result += j
        else:
            result -= j
    
    return result