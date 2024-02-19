# ex001


def find_smaller(list):
    smaller = list[0]
    for num in list:
        if num < smaller:
            smaller = num
    return print(smaller)


find_smaller([5, 9, 3, 19, 70, 8, 100, 2, 35, 27])

# ex002


def printTriangle(num):
    for i in range(1, num + 1):
        print("*" * i)


printTriangle(10)

# ex003


def somatorio(num):
    soma = 0
    for i in range(1, num + 1):
        soma += i
    return print(soma)


somatorio(5)

# ex004

#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.


def calculate_fuel(liters, fuelType):
    if fuelType == "A":
        if liters <= 20:
            total = (liters * 1.9) - (liters * 1.9 * 0.03)
        else:
            total = (liters * 1.9) - (liters * 1.9 * 0.05)
    elif fuelType == "G":
        if liters <= 20:
            total = (liters * 2.5) - (liters * 2.5 * 0.04)
        else:
            total = (liters * 2.5) - (liters * 2.5 * 0.06)
    return print(total)


calculate_fuel(10, "A")


def fuel_price(fuelType, liters):
    if fuelType == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif fuelType == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total


result = fuel_price("A", 10)
print(result)
