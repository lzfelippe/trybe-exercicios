from dataclasses import dataclass
from abc import ABC, abstractmethod
from math import pi as PI


@dataclass
class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


@dataclass
class Quadrado(FiguraGeometrica):
    lado: int

    def area(self):
        return self.lado**2

    def perimetro(self):
        return self.lado * 4


@dataclass
class Retangulo(FiguraGeometrica):
    base: int
    altura: int

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return (self.base + self.altura) * 2


@dataclass
class Circulo(FiguraGeometrica):
    raio: int

    def area(self):
        return PI * self.raio**2

    def perimetro(self):
        return 2 * PI * self.raio
