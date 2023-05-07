import LinkedList from "../LinkedList";
import { CustomToStringFunction } from "../LinkedList/ListNode";

/**
 * Creates a Queue DataType.
 * A classic representation of a First-In-First-Out data structure.
 * This implementation uses a LinkedList
 */
export default class Queue {
  linkedList: LinkedList;

  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   * Returns a boolean value indicating whether the queue is empty or not.
   * This is determined by the head of the linked list being null if empty.
   * @return  {boolean} Boolean representing if queue is empty or not
   */
  isEmpty(): boolean {
    return !this.linkedList.head;
  }

  /**
   * Look into queue and return first item
   * @return  {any}  Value of last item in queue
   */
  peek(): any | null {
    // return null if queue is empty
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head?.value;
  }

  /**
   * Add an item to the Queue
   * @param  {any}    value Value to add to the end of the Queue
   * @return {Queue}        self
   */
  enqueue(value: any): this {
    this.linkedList.append(value);
    return this;
  }

  /**
   * Removes first value from the Queue
   * @return  {any | null}  Value of removed item in queue or null
   */
  dequeue(): any | null  {
    // return null if queue is empty
    if (this.isEmpty()) {
      return null;
    }

    // non null assertion as isEmpty() would handle if head was null
    // return value of deleted node
    const deletedNode = this.linkedList.deleteHead()!;
    return deletedNode.value;
  }

  /**
   * Returns a String Representation of Queue
   * @param   {CustomToStringFunction}  toStringImplementation  Custom toString method for LinkedList
   * @return  {string}                                          String representation of the Queue
   */
  toString(toStringImplementation?: CustomToStringFunction): string {
    return this.linkedList.toString(toStringImplementation)
  }
}
