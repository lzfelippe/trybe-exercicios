def sum(n):
    if n == 0:  # caso base
        return 0
    else:
        print(n)
        return n + sum(n - 1)  # caso recursivo


sum(4)  # 10
