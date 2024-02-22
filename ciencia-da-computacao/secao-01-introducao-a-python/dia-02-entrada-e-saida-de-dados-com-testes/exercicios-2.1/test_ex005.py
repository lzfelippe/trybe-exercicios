from ex005 import fizz_buzz


def test_fizz_buzz_when_number_is_divisible_by_3_returns_fizz():
    assert fizz_buzz(3) == "Fizz"


def test_fizz_buzz_when_number_is_divisible_by_5_returns_buzz():
    assert fizz_buzz(5) == "Buzz"


def test_fizz_buzz_when_number_is_divisible_by_3_and_5_returns_fizz_buzz():
    assert fizz_buzz(15) == "FizzBuzz"
