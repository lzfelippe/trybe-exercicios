def calculations(n):
    number1 = 0
    for n1 in range(n):
        number1 += n1  # linear n

    number2 = 0
    for n1 in range(n):
        for n2 in range(n):  # n²
            number2 += n1 + n2

    number3 = 0
    for n1 in range(n):
        for n2 in range(n):  # n³
            for n3 in range(n):
                number3 += n1 + n2 + n3

    return number1, number2, number3


n1, n2, n3 = calculations(100)
print(f"{n1}, {n2}, {n3}")

# O(n + n² + n³)
# O(n³) - complexidade de tempo
