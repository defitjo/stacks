class Stack {
  items: any[];

  constructor() {
    this.items = [];
  }

  get length(): number {
    return this.items.length;
  }

  peek(): any {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  push(data: any): void {
    if (data === null || data === undefined) {
      throw new Error("data cannot be null");
    }
    this.items.push(data);
  }

  pop(): any {
    if (this.isEmpty()) {
      throw new Error("stack is empty");
    }
    return this.items.pop();
  }

  printStack(): void {
    console.log(this.items);
  }
}

let stack = new Stack();
console.log(stack.isEmpty());
stack.push("a");
stack.push("b");
stack.push("c");
stack.push(1);
stack.push(2);
console.log(stack.peek());
console.log(stack.length);
stack.printStack();
stack.pop();
stack.printStack();
