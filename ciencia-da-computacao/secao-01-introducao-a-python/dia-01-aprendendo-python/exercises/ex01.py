import math

# ex01


def bigger_num(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2


print("maior numero: ", bigger_num(10, 5))

# ex02


def average_list(list):
    return sum(list) / len(list)


print("media da lista: ", average_list([1, 2, 3, 4, 5]))

# ex03


def print_square(num):
    for i in range(num):
        print("*" * num)


print_square(5)

# ex04


def bigger_name(list):
    bigger = ""
    for name in list:
        if len(name) > len(bigger):
            bigger = name
    return print(bigger)


bigger_name(["José", "Lucas", "Nádia", "Felipe", "Cairo", "Joana"])

# ex05


def calculate_ink(wall_size):
    cobertura_por_litro = 3
    tamanho_lata = 18
    preço_lata = 80.00

    litros_necessarios = wall_size / cobertura_por_litro

    litros_necessarios = math.ceil(litros_necessarios)

    latas_necessarias = litros_necessarios / tamanho_lata

    latas_necessarias = math.ceil(latas_necessarias)

    preço_total = latas_necessarias * preço_lata

    return print(latas_necessarias, preço_total)


calculate_ink(180)

# ex06


def tipe_of_triangle(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        if a == b and b == c:
            return "equilátero"
        elif a == b or b == c or a == c:
            return "isósceles"
        else:
            return "escaleno"
    else:
        return "não é um triângulo"


print(tipe_of_triangle(2, 2, 3))
