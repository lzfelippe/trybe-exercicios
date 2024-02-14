import random


def gerar_medias(n):
    list_averages = []
    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average / n
        list_averages.append(average)
    return list_averages


n = 10  # número de médias

array = gerar_medias(n)
print(array)

# O(n) tempo
# 0(1) espaço
