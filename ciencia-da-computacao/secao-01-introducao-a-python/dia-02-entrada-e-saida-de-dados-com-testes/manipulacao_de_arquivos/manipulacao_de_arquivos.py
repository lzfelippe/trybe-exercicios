file = open("arquivo.txt", mode="w")

""" ao abrir um arquivo para escrita, um novo arquivo
 é criado mesmo que ele já exista,
 sobrescrevendo o antigo. """


""" Criamos um contexto, limitando o escopo onde o arquivo está aberto"""
""" O uso do "as" aqui é somente para atribuir """
""" o valor utilizado no contexto à variável file """
with open("arquivo.txt", "w") as file:
    # como estamos DENTRO do contexto, verificamos que o arquivo está ABERTO
    # através do atributo booleano 'closed' (file.closed = False)
    file.write("Maria 45\n")
    file.write("Miguel 33\n")
    print(file.closed)

# escrita
with open("arquivo.txt", "w") as file:
    file.write("Trybe S2")

# leitura
with open("arquivo.txt", "r") as file:
    content = file.read()
    print(content)


# como estamos FORA do contexto, o arquivo está FECHADO (file.closed = True)
print(file.closed)
print("Túlio 22", file=file)
