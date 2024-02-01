def tipe_of_triangle(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        if a == b and b == c:
            return "equilátero"
        elif a == b or b == c or a == c:
            return "isósceles"
        else:
            return "escaleno"
    else:
        return "não é um triângulo"


print(tipe_of_triangle(2, 2, 3))