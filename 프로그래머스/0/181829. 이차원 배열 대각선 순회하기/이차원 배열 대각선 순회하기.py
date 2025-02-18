def solution(board, k):
    result = 0
    for i,j in enumerate(board):
        for p,l in enumerate(j):
            if i + p <= k:
                result += board[i][p]
    return result