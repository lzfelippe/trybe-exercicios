# ex001

user_name = str(input("Digite seu nome: "))

for index in range(0, len(user_name)):
    print(user_name[index])

for letter in user_name:
    print(letter)


# ex002

numeros = input("Digite os números separados por espaço: ")
numeros = numeros.split()
soma = 0

for index in numeros:
    if index.isdigit():
        soma += int(index)
    else:
        print(f"Erro ao somar valores, {index} é um valor inválido")

print(f"A soma dos valores é: {soma}")
