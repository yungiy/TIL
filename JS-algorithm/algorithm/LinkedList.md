## 링크드 리스트

* 데이터 요소의 선형 집합
* 논리적 저장 순서는 메모리의 물리적 저장 순서와 일치하지는 않음
* 각각의 노드들은 자기 자신 다음의 원소를 가리킴
* 링크드 리스트는 순서를 표현하는 노드들의 집합으로 이루어짐
* 순회하는 동안 순서에 상관없이 효율적인 삽입이나 삭제가 가능
* 단점은 접근시간이 선형이며 병렬처리 불가, 빠른 접근 불가

### 삽입
```
prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

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
```
### 탐색
```
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
```
### 삭제
```
delete(value){
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
```
### 순회
```
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
```
### 역순회
```
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
```
### 복잡도
| 메서드 | 접근 | 탐색 | 삽입 | 삭제 |
|--------|------|------|------|------|
| 시간 복잡도 | O(n) | O(n) | O(1) | O(n) |
|공간 복잡도|         O(n)            |
