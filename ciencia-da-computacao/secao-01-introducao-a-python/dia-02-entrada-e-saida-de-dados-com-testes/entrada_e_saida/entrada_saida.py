import sys

# ENTRADA

if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)

user_input = input("Digite uma mensagem: ")
print("O valor recebido foi:", user_input)

# SAÍDA

print("O resultado é", 42)  # saída: O resultado é 42
print("Os resultados são", 6, 23, 42)  # saída: Os resultados são 6 23 42
print(
    "Os resultados são", 6, 23, 42, sep=" - "
)  # saída: Os resultados são * 6 * 23 * 42


err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)
