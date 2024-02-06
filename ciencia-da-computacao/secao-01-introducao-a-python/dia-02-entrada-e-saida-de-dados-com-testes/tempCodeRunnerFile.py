numeros = input("Digite os números separados por espaço: ")
numeros = numeros.split()
soma = 0

for index in range(0, len(numeros)):
    if numeros[index].isdigit():
        soma += int(numeros[index])
    else:
        print(f"Erro ao somar valores, {numeros[index]} é um valor inválido")
print(f"A soma dos valores é: {soma}")
