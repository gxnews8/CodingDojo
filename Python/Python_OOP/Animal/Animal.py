class Animal(object):
    """docstring for Animal."""
    print 'This is a animal!'
    def __init__(self, name, health):
        self.name = name
        self.health = 100

    # walk, run, and displayHealth
    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def displayHealth(self):
        print self.health
        return self

animal = Animal('animal', 100)
animal.walk().walk().walk().run().run().displayHealth()
