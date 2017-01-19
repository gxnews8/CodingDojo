# class Bulding:
#     def __innit__(self, location):
#         self.location = location
#         self.entrace = 'Gate'
#
# class NewBuiding(Bulding):
#     def __init__(self,location):
#         super(NewBuiding, location).__init__(self, location)
class Animal(object):
    """docstring for Animal."""
    def __init__(self, alive):
        # super(Animal, self).__init__()
        self.eat = 'things'
        self.eye = 2
        self.edible = 'yes'
        self.status = 'alive'

class Bird(Animal):
    """docstring for Bird."""
    def __init__(self, arg):
        super(Bird, self).__init__()
        self.arg = arg

class Fish(Animal):
    """docstring for Fish."""
    def __init__(self, arg):
        super(Fish, self).__init__()
        self.arg = arg

class Dog(object):
    """docstring for Dog."""
    def __init__(self, arg):
        super(Dog, self).__init__()
        self.arg = arg
