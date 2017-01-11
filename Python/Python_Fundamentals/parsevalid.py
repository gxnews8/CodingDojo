x = '(str))'
def parsevalid(list):
    count = 0
    for i in range(len(list)):
        if i == '(':
            count += 1
        elif i == ')':
            count -= 1
        if count < 0:
            print 'false'
            return False
        else:
            print 'true'
            return True
    return (count == 0)
parsevalid(x)
