class Bike(object):
    """docstring for Bike."""
    def __init__(self, price, max_speed):
        # super(Bike, self).__init__()
        print "New Bike!"
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
        print '*' * 30

    def displayInfo(self):
        print str(self.price)
        print str(self.max_speed)
        print str(self.miles)
        print '*' * 30
        return self

    def ride(self):
        self.miles += 10
        return self

    def reverse(self):
        self.miles -= 5
        if self.miles < 0:
            self.miles = 0
        return self
#create 3 new bike
bike1=Bike(150, 20)
bike2=Bike(200, 25)
bike3=Bike(300, 125)
#show their information
bike1.displayInfo()
bike2.displayInfo()
bike3.displayInfo()
#ride 1 step
bike1.ride().displayInfo()
bike2.ride().displayInfo()
bike3.ride().displayInfo()
#ride 2 steps then reverse 1 step
bike1.ride().ride().reverse().displayInfo()
bike2.ride().ride().reverse().displayInfo()
bike3.ride().ride().reverse().displayInfo()
#ride 1 steps then reverse 10 steps
bike1.ride().reverse().reverse().reverse().reverse().reverse().reverse().reverse().reverse().reverse().reverse().displayInfo()
bike2.ride().reverse().reverse().reverse().reverse().reverse().reverse().reverse().reverse().reverse().reverse().displayInfo()
bike3.ride().reverse().reverse().reverse().reverse().reverse().reverse().reverse().reverse().reverse().reverse().displayInfo()
