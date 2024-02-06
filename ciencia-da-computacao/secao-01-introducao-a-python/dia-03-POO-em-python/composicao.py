class Ventilador:
    def __init__(self, cor, preco):
        self.__cor = cor
        self.preco = preco

    def cor(self):
        return self.__cor


class Pessoa:
    def __init__(self, nome, saldo_conta):
        self.nome = nome
        self.saldo_conta = saldo_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_conta:
            self.saldo_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        if self.ventilador:
            return f"{self.nome} possui um ventilador"
        return f"{self.nome} não possui um ventilador"


ventilador_branco = Ventilador("branco", preco=100)
pessoa = Pessoa("Felipe", saldo_conta=1000)
pessoa.comprar_ventilador(ventilador_branco)

print(pessoa)
