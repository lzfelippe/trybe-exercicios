class Animal:
    def __init__(self, name) -> None:
        self.name = name

    def make_sound(self):
        print(f"{self.name} fazendo som")


class Mammal(Animal):
    def breastfeed(self):
        print(f"{self.name} amamentando")


class Dog(Mammal):
    def bark(self):
        print(f"{self.name} faz au au!")


dog = Dog("Bolinha")
dog.make_sound()
dog.breastfeed()
dog.bark()
