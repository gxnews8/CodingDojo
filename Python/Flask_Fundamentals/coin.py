import math

def coin(cash):
    money = {'quarters': 0, 'dimes': 0, 'nickels': 0, 'pennys': 0}
    money['quarters'] = math.floor(cash/25)
    cash = cash%25
    money['dimes'] = math.floor(cash/10)
    cash = cash%10
    money['nickels'] = math.floor(cash/5)
    cash = cash%5
    money['pennys'] = math.floor(cash)
    return money

coin(cash)
#41,
