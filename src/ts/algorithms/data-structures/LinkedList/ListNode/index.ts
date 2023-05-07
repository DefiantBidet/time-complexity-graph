
export interface CustomToStringFunction { (nodeValue: any): string}

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
   * @param  {any}     callbackFn  Callback to stringify referential types
   * @return {string}              Value as string
   */
  toString(callbackFn?: CustomToStringFunction): string {
    if (callbackFn) {
      return callbackFn(this.value);
    }

    return `${this.value}`;
  }
};
