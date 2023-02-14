class Stack:

    def __init__(self):
        self.items = []

    def __len__(self):
        return len(self.items)

    def peek(self):
        return self.items[-1]

    def is_empty(self):
        return self.items == []

    def push(self, data):
        if data is None:
            raise TypeError('data cannot be None')
        self.items.append(data)

    def pop(self):
        if self.is_empty():
            raise Exception('stack is empty')
        return self.items.pop()

    def print_stack(self):
        print(self.items)


stack = Stack()
print(stack.is_empty())
stack.push('a')
stack.push('b')
stack.push('c')
stack.push(1)
stack.push(2)
print(stack.peek())
print(stack.__len__())
stack.print_stack()
stack.pop()
stack.print_stack()
