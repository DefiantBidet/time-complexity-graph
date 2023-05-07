import LinkedList from './index';
import ListNode, { CustomToStringFunction } from './ListNode';

describe('LinkedList', () => {
  const mockValue1 = 1;
  const mockValue2 = 2;
  const mockValue3 = 3;
  const mockInsertValue = 'Foo!'

  test('LinkedList constructor should create an empty LinkedList', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.toString()).toBe('');
  });

  test('LinkedList `append` should append ListNode to LinkedList', () => {
    const linkedList = new LinkedList();

    linkedList
      .append(mockValue1)
      .append(mockValue2);

    expect(linkedList.head).not.toBeNull();
    expect(linkedList.tail).not.toBeNull();

    expect(linkedList.head?.value).toBe(mockValue1);
    expect(linkedList.tail?.value).toBe(mockValue2);

    expect(linkedList.toString()).toBe(`${mockValue1}, ${mockValue2}`);
  });

  test('LinkedList `prepend` should prepend ListNode to LinkedList', () => {
    const linkedList = new LinkedList();

    linkedList.prepend(mockValue2);

    expect(linkedList.head).not.toBeNull();
    expect(linkedList.tail).not.toBeNull();

    expect(linkedList.head?.value).toBe(mockValue2);
    expect(linkedList.tail?.value).toBe(mockValue2);

    linkedList
      .append(mockValue1)
      .prepend(mockValue3);

    expect(linkedList.toString()).toBe(`${mockValue3}, ${mockValue2}, ${mockValue1}`);
  });

  test('LinkedList `insert` should insert ListNode to LinkedList at supplied index', () => {
    const linkedList = new LinkedList();

    linkedList
      .append(mockValue1)
      .append(mockValue2);

    linkedList.insert(mockInsertValue, 1);

    expect(linkedList.toString()).toBe(`${mockValue1}, ${mockInsertValue}, ${mockValue2}`);
  });

  test('LinkedList `insert` should prepend ListNode to LinkedList when insert index is below lower bound', () => {
    const mockInsertValue = 'Foo!'
    const linkedList = new LinkedList();

    linkedList
      .append(mockValue1)
      .append(mockValue2)
      .insert(mockInsertValue, -10);

      expect(linkedList.toString()).toBe(`${mockInsertValue}, ${mockValue1}, ${mockValue2}`);
  });

  test('LinkedList `insert` should append ListNode to LinkedList when insert index is above upper bound', () => {
    const linkedList = new LinkedList();

    linkedList
      .append(mockValue1)
      .insert(mockInsertValue, 3);

    expect(linkedList.head).not.toBeNull();
    expect(linkedList.tail).not.toBeNull();

    expect(linkedList.tail?.value).toBe(mockInsertValue);
    expect(linkedList.tail?.next).toBeNull();

    expect(linkedList.toString()).toBe(`${mockValue1}, ${mockInsertValue}`);
  });

  test('LinkedList `insert` should initialize LinkedList when not already initialized', () => {
    const linkedList = new LinkedList();

    linkedList.insert(mockInsertValue, 3);

    expect(linkedList.head).not.toBeNull();
    expect(linkedList.tail).not.toBeNull();

    expect(linkedList.head?.value).toBe(mockInsertValue);
    expect(linkedList.tail?.value).toBe(mockInsertValue);

    expect(linkedList.toString()).toBe(`${mockInsertValue}`);
  });

  test('LinkedList `delete` should return `null` when delete is called on uninitialized LinkedList', () => {
    const linkedList = new LinkedList()
    expect(linkedList.delete('Spoon!')).toBeNull();
  });

  test('LinkedList `delete` should handle when delete is called on head ListNode', () => {
    const linkedList = new LinkedList();

    linkedList
      .append(mockValue1)
      .append(mockValue1)
      .append(mockValue2)
      .append(mockValue2)
      .append(mockValue3)
      .append(mockValue3);

    const deletedNode = linkedList.delete(mockValue1);
    expect(deletedNode).not.toBeNull();
    expect(deletedNode?.value).toBe(mockValue1);
    expect(linkedList.toString()).toBe(`${mockValue2}, ${mockValue2}, ${mockValue3}, ${mockValue3}`);
  });

  test('LinkedList `delete` should delete ListNode by value from LinkedList', () => {
    const linkedList = new LinkedList();

    linkedList
      .append(mockValue1)
      .append(mockValue1)
      .append(mockValue2)
      .append(mockValue2)
      .append(mockValue2)
      .append(mockValue3)
      .append(mockValue3);

    expect(linkedList.head?.value).toBe(mockValue1);
    expect(linkedList.tail?.value).toBe(mockValue3);

    const deletedNode = linkedList.delete(mockValue2);
    expect(deletedNode).not.toBeNull();
    expect(deletedNode?.value).toBe(mockValue2);
    expect(linkedList.toString()).toBe(`${mockValue1}, ${mockValue1}, ${mockValue3}, ${mockValue3}`);
  });

  test('LinkedList `delete` should return `null` when delete is called with no matching ListNodes', () => {
    const linkedList = new LinkedList();

    linkedList
      .append(mockValue1)
      .append(mockValue1)
      .append(mockValue1)
      .append(mockValue2)
      .append(mockValue2)
      .append(mockValue2);

    expect(linkedList.head?.value).toBe(mockValue1);
    expect(linkedList.tail?.value).toBe(mockValue2);

    const deletedNode = linkedList.delete(mockValue3);
    expect(deletedNode).toBeNull();
    expect(linkedList.toString()).toBe(`${mockValue1}, ${mockValue1}, ${mockValue1}, ${mockValue2}, ${mockValue2}, ${mockValue2}`);
  });

  test('LinkedList `delete` should handle when delete is called on tail ListNode', () => {
    const linkedList = new LinkedList();

    linkedList
      .append(mockValue1)
      .append(mockValue1)
      .append(mockValue2)
      .append(mockValue2)
      .append(mockValue3)
      .append(mockValue3);

    const deletedNode = linkedList.delete(mockValue3);
    expect(deletedNode).not.toBeNull();
    expect(deletedNode?.value).toBe(mockValue3);
    expect(linkedList.head?.value).toBe(mockValue1);
    expect(linkedList.tail?.value).toBe(mockValue2);
    expect(linkedList.toString()).toBe(`${mockValue1}, ${mockValue1}, ${mockValue2}, ${mockValue2}`);
  });

  test('LinkedList `deleteTail` should delete LinkedList tail', () => {
    const linkedList = new LinkedList();

    linkedList
      .append(mockValue1)
      .append(mockValue2)
      .append(mockValue3);

    expect(linkedList.head?.value).toBe(mockValue1);
    expect(linkedList.tail?.value).toBe(mockValue3);

    const deletedNode = linkedList.deleteTail();

    expect(deletedNode?.value).toBe(mockValue3);
    expect(linkedList.toString()).toBe(`${mockValue1}, ${mockValue2}`);
    expect(linkedList.head?.value).toBe(mockValue1);
    expect(linkedList.tail?.value).toBe(mockValue2);
  });

  test('LinkedList `deleteTail` should handle only 1 ListNode is LinkedList', () => {
    const linkedList = new LinkedList();

    linkedList.append(mockValue1);

    expect(linkedList.head?.value).toBe(mockValue1);
    expect(linkedList.tail?.value).toBe(mockValue1);

    const deletedNode = linkedList.deleteTail();

    expect(deletedNode?.value).toBe(mockValue1);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  test('LinkedList `deleteHead` should delete LinkedList head', () => {
    const linkedList = new LinkedList();

    linkedList
      .append(mockValue1)
      .append(mockValue2)
      .append(mockValue3);

    expect(linkedList.head?.value).toBe(mockValue1);
    expect(linkedList.tail?.value).toBe(mockValue3);

    const deletedNode = linkedList.deleteHead();

    expect(deletedNode?.value).toBe(mockValue1);
    expect(linkedList.toString()).toBe(`${mockValue2}, ${mockValue3}`);
    expect(linkedList.head?.value).toBe(mockValue2);
    expect(linkedList.tail?.value).toBe(mockValue3);
  });

  test('LinkedList `deleteHead` should return null on an uninitialized LinkedList', () => {
    const linkedList = new LinkedList();
    expect(linkedList.deleteHead()).toBeNull();
  });

  test('LinkedList `deleteHead` should handle only 1 ListNode', () => {
    const linkedList = new LinkedList();

    linkedList.append(mockValue1);

    expect(linkedList.head?.value).toBe(mockValue1);
    expect(linkedList.tail?.value).toBe(mockValue1);

    const deletedNode = linkedList.deleteHead();

    expect(deletedNode?.value).toBe(mockValue1);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  test.todo('LinkedList `find` should find node by value');

  test.todo('LinkedList `find` should find node by callback');

  test.todo('LinkedList `find` should find node by means of custom compare function');

  test.todo('LinkedList `find` should find preferring callback over compare function');

  test('LinkedList `reverse` Should reverse LinkedList', () => {
    const expectedOriginalString = `${mockValue1}, ${mockValue2}, ${mockValue3}`;
    const expectedReversedString = `${mockValue3}, ${mockValue2}, ${mockValue1}`;

    const linkedList = new LinkedList();

    linkedList
      .append(mockValue1)
      .append(mockValue2)
      .append(mockValue3);

    expect(linkedList.head?.value).toBe(mockValue1);
    expect(linkedList.tail?.value).toBe(mockValue3);
    expect(linkedList.toString()).toBe(expectedOriginalString);

    // reverse card has been played
    linkedList.reverse();
    expect(linkedList.head?.value).toBe(mockValue3);
    expect(linkedList.tail?.value).toBe(mockValue1);
    expect(linkedList.toString()).toBe(expectedReversedString);

    // another reverse card - back to original
    linkedList.reverse();
    expect(linkedList.head?.value).toBe(mockValue1);
    expect(linkedList.tail?.value).toBe(mockValue3);
    expect(linkedList.toString()).toBe(expectedOriginalString);

  });

  test('LinkedList `fromArray` should create a LinkedList from an Array', () => {
    const mockArray = [mockValue1, mockValue2, mockValue3];

    const linkedList = new LinkedList();
    linkedList.fromArray(mockArray);

    expect(linkedList.toString()).toBe(`${mockValue1}, ${mockValue2}, ${mockValue3}`);
  });

  test('LinkedList `toArray` should convert a LinkedList to an Array', () => {
    const linkedList = new LinkedList();

    linkedList
      .append(mockValue1)
      .append(mockValue2)
      .append(mockValue3);

    const listArray = linkedList.toArray();

    expect(listArray.length).toBe(3);
    listArray.forEach((nodeValue: ListNode, index: number) => {
      // FIXME: this is functional due to the 1 based increment used in list
      expect(nodeValue?.value).toBe(index + 1);
    });
  });

  test('LinkedList `toString` should return a string representation of LinkedList', () => {
    const linkedList = new LinkedList();

    linkedList
      .append(mockValue1)
      .append(mockValue2)
      .append(mockValue3);

    const listString = linkedList.toString();
    expect(listString).toBe(`${mockValue1}, ${mockValue2}, ${mockValue3}`)
  });

  test('LinkedList `toString` should return a string representation of referential typed LinkedList', () => {
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
    const linkedList = new LinkedList();

    linkedList
      .append(mockReferential1)
      .append(mockReferential2)
      .append(mockReferential3);

    const stringify: CustomToStringFunction = (nodeValue: MockType): string => `{ value: ${nodeValue.value}, label: ${nodeValue.label} }`;

    const listString = linkedList.toString(stringify);

    const expectedString = `{ value: ${mockReferential1.value}, label: ${mockReferential1.label} }, { value: ${mockReferential2.value}, label: ${mockReferential2.label} }, { value: ${mockReferential3.value}, label: ${mockReferential3.label} }`;
    expect(listString).toBe(expectedString)
  });
});
