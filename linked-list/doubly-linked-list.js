// two-way link list list

function DoublyLinkedList() {
  let Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  // private vars
  let length = 0;
  let head = null;
  let tail = null;

  // methods
  this.insert = function(position, element) {
    // check for out-of-bounds values
    if (position >= 0 && position <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        // add on first position

        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) {
        // add as last item

        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;

        current.prev = node;
        node.prev = previous;
      }

      length++; // update size of list
      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function(position) {
    // look for out-of-bounds values
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0;

      // removing first item
      if (position === 0) {
        head = current.next;

        // if there is only one item, update tail
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) {
        // last item

        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        // link previous with current's next - skip it
        previous.next = current.next;
        current.next.prev = previous;
      }

      length--;
      return current.element;
    } else {
      return null;
    }
  };

  
}
