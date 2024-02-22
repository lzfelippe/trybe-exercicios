def countdown(n):
    if n == 0:  # caso base
        print(0)
        print("FIM!")
    else:
        print(n)
        countdown(n - 1)  # caso recursivo


if __name__ == "__main__":
    countdown(10)
