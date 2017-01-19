# create bike object
class Bike(object):
    def __init__(self, price, max_speed):
        print "New Bike!"
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    def displayInfo(self):
        print "The cost of this bike is $" + str(self.price)
        print "The max speed of this bike is " + str(self.max_speed) + " mph."
        print "The milage of this bike is " + str(self.miles) + " miles."
        return self
    def ride(self):
        print "Riding..."
        self.miles += 10
        return self
    def reverse(self):
        print "Reversing..."
        self.miles -= 5
        if self.miles < 0:
            print "Can't be negative!!"
            self.miles = 0
        return self
# create instances
rider1=Bike(200, 50)
rider2=Bike(150, 45)
rider3=Bike(400, 35)
# rider1 rides
rider1.ride().ride().ride().reverse().displayInfo()
# rider2 rides
rider2.ride().ride().reverse().reverse().displayInfo()
# rider3 rides
rider3.reverse().reverse().reverse().displayInfo()
