class MonthlyExpense:
    def __init__(self, internet, grocery, power, water, rent) -> None:
        self.internet = internet
        self.grocery = grocery
        self._power = power
        self._water = water
        self.__rent = rent

    @property
    def power(self):
        return self._power

    @power.setter
    def power(self, new_power):
        if new_power < 0:
            raise ValueError("Power cannot be negative")
        self._power = new_power

    @property
    def water(self):
        return self._water

    @water.setter
    def water(self, new_water):
        if new_water < 0:
            raise ValueError("Water cannot be negative")
        self._water = new_water
