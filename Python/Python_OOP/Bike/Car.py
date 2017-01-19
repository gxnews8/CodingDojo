# create bike object
class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        print "New Car!"
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.milage = mileage
        if self.price > 10000:
            self.tax = .15
        else:
            self.tax = .12
        print self.displayAll();
    def displayAll(self):
        return "Price: " + str(self.price) + "\n" + "Speed: " + self.speed + "\n" + "Fuel: " + self.fuel + "\n" + "Milage: " + self.milage + "\n" + "Tax: " + str(self.tax) +"\n\n"

# create instances
Car1=Car(2000, "35 mph", "Full", "15 mpg")
Car2=Car(2000, "5 mph", "Not Full", "105 mpg")
Car3=Car(2000, "15 mph", "Kind of Full", "95 mpg")
Car4=Car(2000, "25 mph", "Full", "25 mpg")
Car5=Car(2000, "45 mph", "Empty", "25 mpg")
Car6=Car(2000000, "35 mph", "Empty", "15 mpg")
