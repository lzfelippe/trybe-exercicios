# import random
import csv
import json

# 001


# def triangle_inverted(word):
#     for letter in range(len(word), 0, -1):
#         print(word[:letter])


# if __name__ == "__main__":
#     word = input("Digite uma palavra: ")
#     triangle_inverted(word)


# 002

# 003

# MAX_ATTEMPTS = 3


# def retrieve_words(file):
#     return [word.strip() for word in file]


# def draw_secret_word(words):
#     secret_word = random.choice(words)
#     scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
#     return secret_word, scrambled_word


# def collect_guess():
#     guesses = []
#     for attempt in range(MAX_ATTEMPTS):
#         guess = input("Digite sua tentativa: ")
#         guesses.append(guess)
#     return guesses


# def check_guess(secret_word, guesses):
#     if secret_word in guesses:
#         print(f"Você acertou: {secret_word}")
#     else:
#         print(f"Você errou: {secret_word}")


# if __name__ == "__main__":
#     with open("words.txt") as file:
#         words = retrieve_words(file)
#     secret_word, scrambled_word = draw_secret_word(words)
#     print(f"A palavra embaralhada é: {scrambled_word}")
#     guesses = collect_guess()
#     check_guess(secret_word, guesses)

# 004


def retrieve_books(file):
    return json.load(file)


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_percentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    # retrieve books
    with open("library.json") as file:
        books = retrieve_books(file)

    # count by category
    book_count_by_category = count_books_by_categories(books)

    # calculate percentage
    number_of_books = len(books)
    books_percentage_rows = calculate_percentage_by_category(
        book_count_by_category, number_of_books
    )

    # write csv
    header = ["categoria", "percentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)

# ex005
