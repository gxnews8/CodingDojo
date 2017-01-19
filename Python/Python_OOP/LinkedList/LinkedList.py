class Node(object):
    """docstring for LinkedList."""
    def __init__(self, value):
        # super(Linked List, self).__init__()
        self.value = value
        self.next = None

class SinglyLinkedList(object):
    def __init__(self):
        # super(SinglyLinkedList, self).__init__()
        self.head = None
        self.tail = None
    def PrintAllVals(self):
        print self.value
        return self

    def AddBack(val):
        list.head.next.next = self.value
        return self

    def AddFront(val):
        list.head = self.value
        return self

    def InsertBefore(nextVal, val):
        list.head.next = self.value
        return self

    def InsertAfter(preval, val):
        list.tail.next = self.value
        return self

    def RemoveNode(val):
        list.tail = self.value
        return self

    def ReverseList():
        list.tail.next.next = self.value
        return self

list = SinglyLinkedList()
list.head = Node('Alice')
list.head.next = Node('Chad')
list.head.next.next = Node('Debra')
# something close to this should be utilized for all of the above problems
runner = list.head
while(runner.next != None):
    print(runner.value)
    runner = runner.next
