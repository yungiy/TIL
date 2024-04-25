import Comparator from './Comparator';

// 노드 클래스 정의 연결 리스트의 각 노드를 나타냄
class LinkedListNode {
  // 생성자를 정의하며 값과 다음노드(포인터)를 받음
  constructor(value, next = null) {
    this.value;
    this.next;
  }
  // 노드를 문자열로 변환
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

// 링크드 리스트 클래스 정의
export default class LinkedList {
  // 생성자 정의
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;
    // 클래스의 인스턴스 생성 -> 연결 리스트에서 값을 비교하는데 사용
    this.compare = new Comparator();
  }

  // 리스트의 맨 앞에 새로운 노드를 추가할 때
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  // 리스트의 맨 끝에 새로운 노드를 추가할 때
  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  // 특정 위치에 노드를 추가할 때
  insert(value, rawIndex) {
    const index = rawIndex < 0 ? 0 : rawIndex;
    if (index === 0) {
      this.prepend(value);
    } else {
      let count = 1;
      let current = this.head;
      const newNode = new LinkedListNode(value);
      while (current) {
        if (count === index) break;
        currentNode = currentNode.next;
        count += 1;
      }
      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode = newNode;
      } else {
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }
    return this;
  }

  // 주어진 값과 일치하는 노드를 삭제
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deleteNode = null;

    while (this.head && this.compare.equal(this.head.value, value)) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deleteNode;
  }

  // 주어진 값 또는 콜백함수와 일치하는 첫번째 노드를 찾음
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }
    return null;
  }

  // 리스트의 맨 마지막 노드를 삭제함
  // 리스트가 비어있거나
  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // 링크드리스트가 다수일 때
    let currentNode = this.head;

    while (!currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  // 배열을 사용해 연결 리스트 초기화
  fromArray(values) {
    values.forEach((value) => this.append(value));

    return this;
  }

  // 리스트의 모든 노드를 배열로 반환
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  // 리스트를 문자열로 반환
  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  // 리스트의 순서를 역순으로 바꿈
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;

      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
} // end of LinkedList
