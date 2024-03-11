class Product:
    def __init__(self, name: str, price: int) -> None:
        self._name = name
        self._price = price

    def get_description(): ...

    def get_price(): ...


class Book(Product):
    def __init__(self, name: str, price: int, author: str) -> None:
        super().__init__(name, price)
        self._author = author

    def get_description(self) -> str:
        return f"Book: {self._name} by {self._author}"

    def get_price(self) -> int:
        return self._price


class DVD(Product):
    def __init__(self, name: str, price: int, duration: int) -> None:
        super().__init__(name, price)
        self._duration = duration

    def get_description(self) -> str:
        return f"DVD: {self._name} with {self._duration} minutes"

    def get_price(self) -> int:
        return self._price

    def print_details(self) -> None:
        print(f"{self.get_description()} - {self.get_price()}")


book = Book("The Lord of the Rings", 39, "J.R.R. Tolkien")
dvd = DVD("The Lord of the Rings", 39, 180)
print(dvd.get_description())
print(dvd.get_price())
dvd.print_details()
