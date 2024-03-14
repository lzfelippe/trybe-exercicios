from abc import ABC, abstractmethod

# from dataclasses import dataclass


class Employee(ABC):
    def __init__(self, salary: float):
        self.salary = salary

    @abstractmethod
    def calculate_bonus(self): ...


class Developer(Employee):  # bonus 20%
    def calculate_bonus(self):
        return f"Developer bonus: {self.salary * 1.2:.2f}"


class Analist(Employee):  # bonus 30%
    def calculate_bonus(self):
        return f"Analist bonus: {self.salary * 1.3:.2f}"


class Manager(Employee):  # bonus 40%
    def calculate_bonus(self):
        return f"Manager bonus: {self.salary * 1.4:.2f}"


class Other(Employee):  # bonus 10%
    def calculate_bonus(self):
        return f"Other bonus: {self.salary * 1.1:.2f}"


def main():
    dev = Developer(1000)
    print(dev.calculate_bonus())

    analist = Analist(1000)
    print(analist.calculate_bonus())

    manager = Manager(1000)
    print(manager.calculate_bonus())

    other = Other(1000)
    print(other.calculate_bonus())


if __name__ == "__main__":
    main()
