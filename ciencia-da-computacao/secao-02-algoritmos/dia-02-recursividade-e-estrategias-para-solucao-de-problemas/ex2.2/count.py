# não recursivo


# def count_pairs(n):
#     pairs = 0
#     for num in range(n + 1):
#         if num % 2 == 0 and num != 0:
#             pairs += 1
#     return pairs


# recursivo


def count_pairs(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + count_pairs(n - 1)
    else:
        return count_pairs(n - 1)


if __name__ == "__main__":
    print(count_pairs(10))
