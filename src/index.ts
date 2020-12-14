type Nullable<T> = T | null;

interface LinkedNode<T> {
  node: T;
  next: any;
}

interface List<T> {
  isEmpty(): boolean;
  push(node: T): number;
  toString(): string;
  insert(node: T, index: number): boolean;
  get(index: number): Nullable<T>;
  remove(index: number): Nullable<T>;
  indexOf(predicate: T): number;
  constains(predicate: T): boolean;
  getSize(): number;
  traverse(): Iterator<Nullable<T>>;
  reset(): boolean;
}

export default class LinkedList<T> implements List<T> {
  private size: number = 0;
  private head:  Nullable<LinkedNode<T>> = null;

  isEmpty() {
    return this.size === 0;
  }

  private createNode(node: T): LinkedNode<T> {
    return {
      node,
      next: null
    };
  }

  push(node: T) {
    const newNode = this.createNode(node);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.getNodeAt(this.size - 1) as LinkedNode<T>;
      current.next = newNode;
    }

    this.size += 1;

    return this.size;
  }

  insert(node: T, index = 0) {
    if (index < 0 || index > this.size) return false;

    const newNode = this.createNode(node);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let previousHead = this.getNodeAt(index - 1) as LinkedNode<T>;
      newNode.next = previousHead?.next;
      previousHead.next = newNode;
    }

    this.size += 1;
    return true;
  }

  getSize() {
    return this.size;
  }

  reset() {
    this.head = null;
    this.size = 0;
    return this.size === 0 && this.head === null;
  }

  getNodeAt(index: number): Nullable<LinkedNode<T>> {
    if (index === undefined || index < 0 || index > this.size) {
      return null;
    };

    if (index === 0) {
      return this.head;
    }

    let current = this.head as LinkedNode<T>;

    for (let i = 0; i < index; i++){
      current = current.next;
    }

    return current;
  }

  get(index: number) {
    const node = this.getNodeAt(index);
    return node ? node.node : null;
  }

  remove(index: number) {
    if (index < 0 || index > this.size) {
      return null;
    }

    let removedNode = this.head as LinkedNode<T>;

    if (index === 0) {
      this.head = this.head?.next;
    } else {
      let previousNode = this.getNodeAt(index - 1) as LinkedNode<T>;
      removedNode = previousNode?.next;
      previousNode.next = removedNode?.next;
    }

    this.size -= 1;
    return removedNode.node;
  }

  indexOf(predicate: T) {
    let current = this.head;
    
    if (current?.node === predicate) {
      return 0;
    }

    for (let i = 0; i < this.size; i++){
      if (current?.node === predicate) {
        return i;
      }
      current = current?.next;
    }

    return -1;      
  }

  constains(predicate: T) {
    return this.indexOf(predicate) !== -1;
  }

  toString() {
    if (!this.size) return '';

    let str = `${this.head?.node}`;
    let current = this.head;

    for (let i = 0; i < this.size - 1; i++) {
      current = current?.next;
      str += `,${current?.node}`;
    }

    return str;
  }

  *traverse() {
    for (let i = 0; i < this.size; i++){
      yield this.get(i);
    }
  }

}

