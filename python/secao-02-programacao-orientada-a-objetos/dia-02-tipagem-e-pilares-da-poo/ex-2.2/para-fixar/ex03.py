class Vehicle:
    def __init__(
        self,
        name: str,
        capacity: int,
    ) -> None:
        self.name = name
        self.capacity = capacity

    def move(self, distance: int) -> str:
        return f"""
{self.name} carried {self.capacity} people across {distance} kilometers."""


class Car(Vehicle):
    def move(self, distance: int) -> str:
        return f"Car {super().move(distance)}"


class Motocycle(Vehicle):
    def __init__(self, name: str) -> None:
        self.name = name
        self.capacity = 2


my_car = Car("Fusca", 4)
my_bike = Motocycle("CG 125")

print(my_car.move(10))
print(my_bike.move(10))
