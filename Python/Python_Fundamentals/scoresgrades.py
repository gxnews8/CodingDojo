print 'Please anter your scores:'
scores = int(input())
def scoresgrades(scores):
    if scores < 0 or scores > 100:
        print 'Please enter a number between 0 - 100'
    elif scores >= 60 and scores < 69:
        print 'Scores: ', scores, '; Your grade is D'
    elif scores >= 70 and scores < 79:
        print 'Scores: ', scores, '; Your grade is C'
    elif scores >= 80 and scores < 89:
        print 'Scores: ', scores, '; Your grade is B'
    elif scores >= 90 and scores <= 100:
        print 'Scores: ', scores, '; Your grade is A'
    else:
        print 'Scores: ', scores, '; You need to learn more.'

scoresgrades(scores)
