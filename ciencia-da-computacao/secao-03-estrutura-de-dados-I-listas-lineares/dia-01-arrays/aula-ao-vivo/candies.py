candies = [2, 3, 5, 1, 3]
extra_candies = 3
answer = [True, True, True, False, True]


def kid_with_candies(candies, extra_candies):
    max_candies = max(candies)  # pega maior valor

    return [candy + extra_candies >= max_candies for candy in candies]


print(kid_with_candies(candies, extra_candies))
