def validate(list):
    stack = []
    count1 = 0#()
    count2 = 0#{}
    count3 = 0#[]
    for i in list:
        if list[i] == '(':
            count1 += 1
            stack.insert('(')
        elif list[i] == ')':
            count1 -= 1
            # list.insert('(')
        elif list[i] == '{':
            count2 += 1
            stack.insert('{')
        elif list[i] == '}':
            count2 -= 1
            # list.insert('(')
        elif list[i] == '[':
            count3 += 1
            stack.insert('[')
        elif list[i] == '[':
            count3 -= 1
            # list.insert('(')
        if count1 <> 0 or count2 <> 0 or count3 <> 0 :
            return False

x = ['((){{}}[][])']
validate(x)
