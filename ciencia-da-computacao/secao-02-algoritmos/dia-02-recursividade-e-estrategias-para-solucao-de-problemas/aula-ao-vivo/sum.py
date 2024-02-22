def sum(n):
    if n == 0:  # caso base
        return 0
    else:
        return n + sum(n - 1)  # caso recursivo


if __name__ == "__main__":
    print(sum(6))
