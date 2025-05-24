class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
      let newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
    pop() {
      if (!this.head) return undefined;
  
      let current = this.head;
      let newTail = current;
  
      while (current.next) {
        newTail = current;
        current = current.next;
      }
  
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
  
      return current.data;
    }
    shift() {
      if (this.length === 0) {
        this.tail = null;
      }
      if (!this.head) return undefined;
      let currentHead = this.head;
      this.head = currentHead.next;
  
      this.length--;
      return currentHead.data;
    }
    unshift(val) {
      let newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }
    get(index) {
      if (index < 0 || index > this.length) return null;
  
      let current = this.head;
      let counter = 0;
  
      while (counter !== index) {
        current = current.next;
        counter++;
      }
  
      return current;
    }
    set(index, value) {
      var foundNode = this.get(index);
  
      if (foundNode) {
        foundNode.val = value;
        return true;
      }
  
      return false;
    }
    insert(index, value) {
      if (index < 0 || index > this.length) return false;
      if (index == 0) return !!this.unshift(value);
      if (index == this.length) return !!this.push(value);
  
      var newNode = new Node(value);
  
      let prev = this.get(index - 1);
      let temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
    remove(index) {
      if (index < 0 || index > this.length) return null;
  
      if (index == 0) return this.shift();
      if (index == this.length - 1) return this.pop();
      let prev = this.get(index - 1);
      let nextNode = this.get(index + 1);
  
      prev.next = nextNode;
  
      this.length--;
    }
    print(){
      let arr=[];
  let current=this.head
      while(current){
        arr.push(current.data) 
        current=current.next;
        
      }
  
      console.log(arr)
    }
  }
  
  var list = new SinglyLinkedList();
  list.push(1)
  
  
  