import { CustomToStringFunction } from '../LinkedList/ListNode';
import Queue from './index';

describe('Queue', () => {
  test('Queue `constructor` should create an empty queue', () => {
    const queue = new Queue();

    expect(queue).not.toBeNull();
    expect(queue.linkedList).not.toBeNull();
  });

  test('Queue `isEmpty` should return true when the queue is empty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('Queue `isEmpty` should return false when the queue is not empty', () => {
    const queue = new Queue();
    queue.enqueue('foo');

    expect(queue.isEmpty()).toBe(false);
  });

  test('Queue `peek` should return the value of the first element in the queue', () => {
    const queue = new Queue();
    const mockValueTop = 'foo';
    const mockValueBottom = 'bar';

    queue.enqueue(mockValueTop);
    queue.enqueue(mockValueBottom);

    const peekedValue = queue.peek();
    expect(peekedValue).toBe(mockValueTop);

  });

  test('Queue `peek` should return null when the queue is empty', () => {
    const queue = new Queue();
    expect(queue.peek()).toBeNull();
  });

  test('Queue `enqueue` should enqueue data to queue', () => {
    const mockValue1 = 1;
    const mockValue2 = 2;

    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);

    queue
      .enqueue(mockValue1)
      .enqueue(mockValue2);

      const peekedValue = queue.peek();
      const queueString = queue.toString();

    expect(queue.isEmpty()).toBe(false);
    expect(peekedValue).toBe(mockValue1);
    expect(queueString).toBe(`${mockValue1}, ${mockValue2}`);
  });

  test('Queue `dequeue` should dequeue data from queue', () => {
    const mockValue1 = 1;
    const mockValue2 = 2;

    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);

    queue
      .enqueue(mockValue1)
      .enqueue(mockValue2);

    expect(queue.isEmpty()).toBe(false);

    const firstItem = queue.dequeue();
    const nextItem = queue.peek();

    expect(firstItem).toBe(mockValue1);
    expect(nextItem).toBe(mockValue2);
    expect(queue.isEmpty()).toBe(false);
  });

  test('Queue `dequeue` should return null when the queue is empty', () => {
    const queue = new Queue();

    expect(queue.dequeue()).toBeNull();
  });

  test('Queue `toString` should return a string representation of Queue', () => {
    const queue = new Queue();

    const mockValue1 = 1;
    const mockValue2 = 2;
    const mockValue3 = 3;

    queue
      .enqueue(mockValue1)
      .enqueue(mockValue2)
      .enqueue(mockValue3);

    const listString = queue.toString();
    expect(listString).toBe(`${mockValue1}, ${mockValue2}, ${mockValue3}`)
  });

  test('Queue `toString` should return a string representation of referential typed Queue', () => {
    interface MockType {
      value: number;
      label: string;
    };

    const mockReferential1: MockType = {
      value: 1,
      label: 'Foo!!!',
    };
    const mockReferential2: MockType = {
      value: 2,
      label: 'Testing...',
    };
    const mockReferential3: MockType = {
      value: 3,
      label: 'Spoon!',
    };

    const queue = new Queue();

    queue
      .enqueue(mockReferential1)
      .enqueue(mockReferential2)
      .enqueue(mockReferential3);

    const stringify: CustomToStringFunction = (nodeValue: MockType): string => `{ value: ${nodeValue.value}, label: ${nodeValue.label} }`;

    const listString = queue.toString(stringify);

    const expectedString = `{ value: ${mockReferential1.value}, label: ${mockReferential1.label} }, { value: ${mockReferential2.value}, label: ${mockReferential2.label} }, { value: ${mockReferential3.value}, label: ${mockReferential3.label} }`;
    expect(listString).toBe(expectedString)
  });
});
