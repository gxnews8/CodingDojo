from Animal import Animal
class Dog(Animal):
    print 'This is a dog!'
    def pet(self):
        self.health += 5
        return self

dog = Dog('dog', 150)
dog.walk().walk().walk().run().run().pet().displayHealth()
