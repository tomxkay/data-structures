// one-way link

function LinkedList() {
  let Node = function(element) {
    this.element = element;
    this.next = null;
  };

  // private vars
  let length = 0;
  let head = null;

  // methods
  this.append = function(element) {
    let node = new Node(element);
    let current;

    if (head === null) {
      // if first node on list
      head = node;
    } else {
      current = head;

      // loop the list until find last item.
      while (current.next) {
        current = current.next;
      }

      // get last item and assign next to node to make the link
      current.next = node;
    }

    length++; // update size of list
  };

  this.insert = function(position, element) {
    // check for out-of-bounds values
    if (position >= 0 && position <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        // add on first position

        node.next = current;
        head = node;
      } else {
        // traverse to position
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }

      length++; // update size of list
      return true; // return true if inserted successfully.
    } else {
      // return false if did not insert.
      return false;
    }
  };

  this.removeAt = function(position) {
    // two scenerio: removing the first element, removing any element other than the first.

    // check for out-of-bounds values
    if (position > -1 && position < length) {
      let current = head;
      let previous;
      let index = 0;

      // removing first item
      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        // link previous with current's next: skip it to remove
        previous.next = current.next;
      }

      length--; // update length

      return current.element; // return the removed element
    } else {
      // if position is out of bound
      return null;
    }
  };

  this.indexOf = function(element) {
    let current = head,
      index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }

      index++;
      current = current.next;
    }

    return -1;
  };

  this.isEmpty = function() {
    return length === 0;
  };

  this.size = function() {
    return length;
  };

  this.toString = function() {
    let current = head;
    let string = "";

    while (current) {
      string += current.element + (current.next ? "\n" : "");
      current = current.next;
    }

    return string;
  };

  this.print = function() {};
}

var list = new LinkedList();
list.append(15);
list.append(10);
