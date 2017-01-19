class MyCar(object):
    """docstring for MyCar."""
    def __init__(self, price, speed, fuel, mileage):
        # super(MyCar, self).__init__()
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if self.price > 10000:
            self.tax = .15
        else:
            self.tax = .12
        print self.display_all()
        print '-' * 20

    def display_all(self):
        return "Price: " + str(self.price) + "\n" + "Speed: " + self.speed + "\n" + "Fuel: " + self.fuel + "\n" + "Mileage: " + self.mileage + "\n" + "Tax: " + str(self.tax)

car1 = MyCar(2000, '35mph', 'Full', '15mpg')
car2 = MyCar(2000, '5mph', 'Not Full', '105mpg')
car3 = MyCar(2000, '15mph', 'Kind of Full', '95mpg')
car4 = MyCar(2000, '25mph', 'Full', '25mpg')
car5 = MyCar(2000, '45mph', 'Empty', '25mpg')
car6 = MyCar(2000000, '35mph', 'Empty', '15mpg')
