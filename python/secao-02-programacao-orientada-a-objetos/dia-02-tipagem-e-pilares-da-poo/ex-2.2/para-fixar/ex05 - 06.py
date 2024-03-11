class Rectangle:
    def __init__(self, base: int, height: int) -> None:
        self.base = base
        self.height = height

    def calculate_perimeter(self) -> int:
        return (self.base + self.height) * 2

    def calculate_area(self) -> int:
        return self.base * self.height


obj = Rectangle(5, 10)
print(obj.calculate_area())
print(obj.calculate_perimeter())
