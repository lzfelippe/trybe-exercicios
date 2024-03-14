from abc import ABC, abstractmethod


class Product(ABC):
    def __init__(self, price: float) -> None:
        self.price = price

    @abstractmethod
    def print_price(self):
        raise NotImplementedError("método não implementado!")


class Book(Product):
    def __init__(self, price: float) -> None:
        super().__init__(price)

    def print_price(self):
        print(f"O preço do livro é: R${self.price:.2f}")


book = Book(50)
book.print_price()
