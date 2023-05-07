import ListNode, { CustomToStringFunction } from './ListNode';

/**
 * CustomFindOptions describes the parameter options for
 * finding a ListNode in the LinkedList
 */
export interface CustomFindOptions {
  value?: any;
  findCallback?: (nodeValue: any) => boolean;
}

/**
 * LinkedList
 * Creates a data type that represents a list of Nodes pointing
 * to the next Node in the LinkedList
 */
export default class LinkedList {
  head: ListNode | null;
  tail: ListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Append value to end of Linked List
   * @param   {any} value   Value to be added to the Linked List
   * @return  {LinkedList}  self
   */
  append(value: any): this {
    const newNode: ListNode = new ListNode(value);

    // if head not present/new list - init LinkedList and return
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // append to existing Linked List
    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    return this;
  }

  /**
   * Prepend value to beginning of Linked List
   * @param   {any} value   Value to be added to the Linked List
   * @return  {LinkedList}  self
   */
  prepend(value: any): this {
    const newNode: ListNode = new ListNode(value, this.head);
    this.head = newNode;

    // if tail not present/new list - create tail
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * Insert value into Linked List at supplied index position.
   * @param   {any}         value  Value to be added to the Linked List
   * @param   {number}      index  Index position to add value to Linked List
   * @return  {LinkedList}         self
   */
  insert(value: any, index: number): this {
    // if supplied index is less than zero - use zero for prepending
    // otherwise use supplied value
    const insertIndex = index < 0 ? 0 : index;

    // prepend if insert index is <= 0
    if (insertIndex === 0) {
      this.prepend(value);
      return this;
    }

    let count = 1;
    let currentNode = this.head;

    const newNode: ListNode = new ListNode(value);

    // iterate over list finding index
    while (currentNode) {
      if (count === insertIndex) {
        break;
      }
      currentNode = currentNode.next;
      count++;
    }

    // if index is found insert into List
    if (currentNode) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    } else {
      // not found - add to end or initialize list
      if (this.tail) {
        this.tail.next = newNode;
      } else {
        this.head = newNode;
      }

      this.tail = newNode;
    }

    return this;
  }

  /**
   * Deletes value from Linked List
   * @param   {any} value Value to be removed from the Linked List
   * @return  {ListNode}  self
   */
  delete(value: any): ListNode | null {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // if head is deleted value - next unique value is now head
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;
    if (currentNode) {
      // if next node is to be deleted - make next node to be next, next value
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // check if tail is to be deleted
    if (this.tail && this.tail.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  /**
   * Deletes the tail of the linked list and references to it
   * in other ListNodes of the LinkedList
   * @return {ListNode | null}  Deleted ListNode or null if none deleted
   */
  deleteTail(): ListNode | null {
    const deletedNode = this.tail;

    // if only 1 ListNode
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedNode;
    }

    // ListNode > 1
    // Prior to deleting tail -
    // remove reference to tail in previous ListNode's `next` member
    let currentNode = this.head;
    while(currentNode?.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;
    return deletedNode;
  }

  /**
   * Deletes the head of the linked list and references to it
   * in other ListNodes of the LinkedList
   * @return {ListNode | null}  Deleted ListNode or null if none deleted
   */
  deleteHead(): ListNode | null {
    if (!this.head) {
      return null;
    }

    const deletedNode = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedNode;
  }

  /**
   * Finds ListNode by value or customMatcher
   *
   * By value = if the `value` member of the CustomFindOptions
   * is supplied, a strict equality comparison is done on each iteration
   * of the LinkedList until found. Returning the ListNode if found,
   * or null if not found.
   *
   * By custom function - if the `findCallback` member of the
   * CustomFindOptions is supplied, the callback function is invoked
   * for each iteration of the LinkedList. The callback function
   * should return a boolean indicating whether it matches or not.
   *
   * @param   {any}                value         Value to strictly compare
   * @param   {CustomFindOptions}  findCallback  Matching method to apply
   * @return  {ListNode | null}                  ListNode if found, null if not found
   */
  find({ value = undefined, findCallback = undefined }: CustomFindOptions): ListNode | null {
    // LinkedList not initialized - nothing to find
    if (!this.head) {
      return null;
    }

    // cache current head and iterate through LinkedList
    // invoking callback or comparing values on each iteration
    let currentNode: ListNode | null = this.head;

    while(currentNode) {
      // via findCallback
      if (findCallback && findCallback(currentNode.value)) {
        return currentNode;
      }

      // via value comparison
      if (value && value === currentNode.value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    // not found
    return null;
  }

  /**
   * Reverses the order of the LinkedList
   * @return  {LinkedList}  self
   */
  reverse(): this {
    let currentNode = this.head;
    let previousNode = null;
    let nextNode = null;

    while (currentNode) {
      // cache next node
      nextNode = currentNode.next;

      // change reference of `currentNode.next` to previousNode
      currentNode.next = previousNode;

      // move previousNode and currentNode forward in LinkedList
      previousNode = currentNode
      currentNode = nextNode;
    }

    // reset head and tail
    this.tail = this.head;
    this.head = previousNode;

    return this;
  }

  /**
   * Creates a LinkedList from an array by iterating
   * over array and appending to LinkedList
   * @param   {any[]}       values  Array to iterate over
   * @return  {LinkedList}          self
   */
  fromArray(values: any[]): this {
    values.forEach((value: any) => this.append(value));
    return this;
  }

  /**
   * Converts LinkedList to an Array of ListNodes
   * @return  {ListNode[]}  Array of ListNode objects
   */
  toArray(): ListNode[] {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * Returns a string representation of the LinkedList
   * @param   {CustomToStringFunction}  toStringImplementation  Custom toString method for ListNode
   * @return  {string}                                          String representation of LinkedList
   */
  toString(toStringImplementation?: CustomToStringFunction): string {
    return this.toArray()
      .map((node: ListNode) => node.toString(toStringImplementation))
      .join(', ');
  }
}
