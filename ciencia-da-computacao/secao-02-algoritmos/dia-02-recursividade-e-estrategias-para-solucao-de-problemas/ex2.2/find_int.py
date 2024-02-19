def find_bigger(list):
    if len(list) <= 1:
        return list
    else:
        if list[0] > list[1]:
            list[1] = list[0]
        return find_bigger(list[1:])


if __name__ == "__main__":
    print(find_bigger([5, 4, 6, 12]))
