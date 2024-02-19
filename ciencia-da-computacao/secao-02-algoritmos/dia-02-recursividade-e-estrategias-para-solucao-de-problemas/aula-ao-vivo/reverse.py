def reverse(list):
    if len(list) <= 1:
        return list
    else:
        return [list[-1]] + reverse(list[: len(list) - 1])


if __name__ == "__main__":
    print(reverse([5, 4, 6, 2]))
