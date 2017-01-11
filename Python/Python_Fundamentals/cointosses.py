import random
# print round(random.random())
def cointosses(arg):

    print 'Starting the program...'
    head = 0
    tail = 0

    for i in range(1,arg+1):
        random_num = random.random()
        n = round(random_num)
        if n==0:
            head += 1
            print 'Attempt #', i, ': Throwing a coin... It\'s a head! ... Got ', head, ' head(s) so far and ',tail,' tail(s) so far'
        elif n==1:
            tail += 1
            print 'Attempt #', i, ': Throwing a coin... It\'s a tail! ... Got ', head, ' head(s) so far and ',tail,' tail(s) so far'

cointosses(5000)
print 'Ending the program, thank you!'
