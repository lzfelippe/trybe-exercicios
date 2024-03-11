from dataclasses import dataclass


@dataclass
class TV:
    def __init__(self, tamanho: int):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1
        else:
            raise ValueError("Volume maximo é 99")

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1
        else:
            raise ValueError("Volume minimo é 0")

    def modificar_canal(self, canal):
        if canal > 0 and canal < 99:
            self.__canal = canal
        else:
            raise ValueError("Canal não pode ser maior que 99 nem menor que 0")

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
