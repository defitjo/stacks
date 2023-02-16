var Stack = /** @class */ (function () {
  function Stack() {
    this.items = [];
  }
  Object.defineProperty(Stack.prototype, "length", {
    get: function () {
      return this.items.length;
    },
    enumerable: false,
    configurable: true,
  });
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  };
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  };
  Stack.prototype.push = function (data) {
    if (data === null || data === undefined) {
      throw new Error("data cannot be null");
    }
    this.items.push(data);
  };
  Stack.prototype.pop = function () {
    if (this.isEmpty()) {
      throw new Error("stack is empty");
    }
    return this.items.pop();
  };
  Stack.prototype.printStack = function () {
    console.log(this.items);
  };
  return Stack;
})();
var stack = new Stack();
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
