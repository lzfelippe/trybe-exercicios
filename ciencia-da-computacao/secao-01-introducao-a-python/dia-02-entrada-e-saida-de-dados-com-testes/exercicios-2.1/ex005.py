# ex005


def fizz_buzz(number):
    if number % 3 == 0 and number % 5 == 0:
        return "FizzBuzz"
    if number % 3 == 0:
        return "Fizz"
    if number % 5 == 0:
        return "Buzz"
    return number


if __name__ == "__main__":
    number = int(input("Digite um número: "))
    print(fizz_buzz(number))
