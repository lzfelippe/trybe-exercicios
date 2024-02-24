spots1 = [8, 1, 5, 2, 6]  # 11
spots2 = [4, 1, 5, 2, 6]  # 9


def max_score(array):
    answer = -1
    previous = -1

    for j in range(1, len(array)):
        i = j - 1
        previous = max(previous, array[i] + i)
        answer = max(answer, previous + array[j] - j)
    return answer


print(max_score(spots1))
