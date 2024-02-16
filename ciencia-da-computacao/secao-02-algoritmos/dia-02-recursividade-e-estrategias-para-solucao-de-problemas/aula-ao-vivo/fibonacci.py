def fibonacci(n):
    if n < 2:  # caso base
        print
        return n
    else:
        print("ativou aqui")
        return fibonacci(n - 1) + fibonacci(n - 2)  # caso recursivo


if __name__ == "__main__":
    print(fibonacci(10))  # 55
