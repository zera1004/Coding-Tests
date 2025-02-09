def solution(myString, pat):
    myString = myString.replace('A', ' ')
    myString = myString.replace('B', 'A')
    myString = myString.replace(' ', 'B')
    return 1 if pat in myString else 0