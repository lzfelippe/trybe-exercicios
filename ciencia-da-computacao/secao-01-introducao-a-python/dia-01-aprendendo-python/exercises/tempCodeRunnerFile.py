def calculate_fuel(liters, fuelType):
    if fuelType == "A":
        if liters <= 20:
            total = (liters * 1.9) - (liters * 1.9 * 0.03)
        else:
            total = (liters * 1.9) - (liters * 1.9 * 0.05)
    elif fuelType == "G":
        if liters <= 20:
            total = (liters * 2.5) - (liters * 2.5 * 0.04)
        else:
            total = (liters * 2.5) - (liters * 2.5 * 0.06)
    return print(total)


calculate_fuel(10, "A")