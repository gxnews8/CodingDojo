class Node(object):
    def __init__(self, value):
        self.value = value
        self.next = None

class SinglyLinkedList(object):
    def __init__(self):
        self.head = None
        self.tail = None
    def PrintAllVals(self):
        location = self.head
        while (location.next != None):
            print location.value
            location = location.next
        print location.value
        return self
    def AddBack(self, value):
        if self.head == None:
            self.head = Node(value)
            return self
        location = self.head
        while location.next != None:
            location=location.next
        location.next = Node(value)

    def AddFront(self, value):
        pointer=self.head
        self.head=Node(value)
        self.head.next=pointer

    def InsertBefore(self, nextValue, value):
        # make sure the list is not empty
        if self.head == None:
            print "List is empty"
            return -1
        # begin the search
        locationAfter = self.head
        while (locationAfter.value != nextValue):
            # check to make sure that we aren't at the end of the list
            if locationAfter.next == None:
                print "Value not found"
                return -1
            # store the current location before moving to the next location
            locationBefore = locationAfter
            locationAfter = locationAfter.next
        # found the location, put the item in.
        # copy the pointer for the previous location to pointer
        pointer=locationBefore.next
        # insert the new node
        locationBefore.next=Node(value)
        #copy the pointer to the new node to reconnect the chain.
        locationBefore.next.next=pointer

    def InsertAfter(self, nextValue, value):
        # make sure the list is not empty
        if self.head == None:
            print "List is empty"
            return -1
        # begin the search
        locationAfter = self.head
        while (location.value != nextValue):
            # check to make sure that we aren't at the end of the list
            if location.next == None:
                print "Value not found"
                return -1
            # move to the end of the list
            location = location.next
        # found the location, put the item in.
        # copy the pointer for the previous location to pointer
        pointer=location.next
        # insert the new node
        location.next=Node(value)
        #copy the pointer to the new node to reconnect the chain.
        location.next.next=pointer



# RemoveNode(self, val)
# ReverseList(self)

list = SinglyLinkedList()
list.head = Node('Alice')
list.head.next = Node('Chad')
list.head.next.next = Node('Debra')
list.head.next.next.next = Node('Eric')
list.AddBack('Jim')
list.AddFront('Patty')
list.InsertBefore('Debra', 'David')
list.InsertBefore('Debra', 'Max')
list.PrintAllVals()
