def solution(array):
    result = array[0:len(array)]
    array.sort()
    return [array[len(array) - 1], result.index(array[len(array) - 1])]