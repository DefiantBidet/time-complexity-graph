
/**`
 * CustomToStringFunction describes the callback function
 * to be invoked on the ListNode to provide custom string
 * representation of the ListNode
*/
export interface CustomToStringFunction { (nodeValue: any): string }

/**
 * Node Implementation for Linked List
 */
export default class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }

  /**
   * Stringifies data contained in value
   * @param  {any}     toStringImplementation Callback to stringify referential types
   * @return {string}                         Value as string
   */
  toString(toStringImplementation?: CustomToStringFunction): string {
    if (toStringImplementation) {
      return toStringImplementation(this.value);
    }

    return `${this.value}`;
  }
};
