def solution(num_list):
    hol = 0
    jack = 0
    for i,j in enumerate(num_list):
        if (i + 1) % 2 == 1:
            hol +=j
        else:
            jack +=j
    return hol if hol > jack else jack