import ListNode, { CustomToStringFunction } from './index';

interface MockType {
  value: number;
  label: string;
};

describe('LinkedList/ListNode', () => {
  describe('constructor', () => {
    test('Should create ListNode with only `value` parameter supplied', () => {
      const mockValue = 100;
      const listNode = new ListNode(mockValue);

      expect(listNode.value).toBe(mockValue);
      expect(listNode.next).toBeNull();
    });

    test('Should create ListNode with referential types', () => {
      const nodeValue: MockType = {
        value: 99,
        label: 'foo!'
      };

      const listNode = new ListNode(nodeValue);

      expect(listNode.value).toMatchObject(nodeValue);
      expect(listNode.value.value).toBe(nodeValue.value);
      expect(listNode.value.label).toBe(nodeValue.label);
      expect(listNode.next).toBeNull();
    });

    test('Should link nodes by supplying `next` parameter', () => {
      const mockValue1 = 100;
      const mockValue2 = 900;

      const tailNode = new ListNode(mockValue2);
      const headNode = new ListNode(mockValue1, tailNode);

      expect(headNode.next).toBeDefined();
      expect(tailNode.next).toBeNull();

      expect(headNode.value).toBe(mockValue1);
      expect(tailNode.value).toBe(mockValue2);

      expect(headNode.next?.value).toBe(mockValue2);
    });
  });

  describe('toString', () => {
    test('Should convert ListNode to string', () => {
      const mockNumberValue = 100;
      const mockStringValue = 'Foo!!!!';

      const listNode = new ListNode(mockNumberValue);

      expect(listNode.toString()).toBe(`${mockNumberValue}`);

      listNode.value = mockStringValue;
      expect(listNode.toString()).toBe(mockStringValue);
    });

    test('Should convert ListNode to string via `callbackFn`', () => {
      const nodeValue: MockType = {
        value: 99,
        label: 'foo!'
      };

      const customStringFunction: CustomToStringFunction = (nodeValue: any) => `{ value: ${nodeValue.value}, label: ${nodeValue.label} }`;

      const listNode = new ListNode(nodeValue);

      const expectedString = '{ value: 99, label: foo! }';

      expect(listNode.toString(customStringFunction)).toBe(expectedString);
    });
  });
});
