def multiply_array(numbers):
    result = 1
    for number in numbers:
        result *= number

    return result


print(multiply_array([2, 1]))


# complexidade de tempo: 0(N)
# complexidade de espaço: 0(1)
