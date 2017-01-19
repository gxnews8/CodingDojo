from Animal import Animal
class Dragon(Animal):
    print 'This is a dragon!'
    def fly(self):
        self.health -= 10
        return self

dragon = Dragon('dragon', 170)
dragon.walk().walk().walk().run().run().fly().fly().displayHealth()
