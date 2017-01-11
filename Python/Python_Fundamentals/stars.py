#Part 1
x = [4, 6, 1, 3, 5, 7, 25]

def draw_stars(list):
    for i in list:
        print '*' * i

draw_stars(x)

#Part 2
y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

def draw_stars2(list):
    for i in list:
        if isinstance(i, int):
            print '*' * i
        else:
            print i.upper() #i.lower()

draw_stars2(y)
