// Lista
class listNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  appendLast(data) {
    let node = this.head;
    if (node) {
      while (node.next) {
        node = node.next;
      }
      node.next = new listNode(data);
    } else {
      this.head = new listNode(data);
    }
  }

  removeNode(data) {
    let node = this.head;
    let aux = this.head;
    if (node.data == data) {
      this.head = node.next;
      return;
    }
    while (node.next.data != data && node.next != null) {
      node = node.next;
    }
    aux = node;
    node.next.next = aux;
    return;
  }
  appendFirst(data) {
    let node = this.head;
    let newNode = new listNode(data);
    if (node) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = new listNode(data);
    }
  }

  showlist() {
    let node = this.head;
    while (node != null) {
      console.log(node.data);
      node = node.next;
    }
  }
}

const list = new linkedList();

let buttonSend = document.getElementById("buttonSend");
let table = document.getElementById("bodyTable");
let count = 1;

function execute() {
  list.appendLast(formAdd.elements["nameL"].value);
  formAdd.elements["nameL"].value = "";
  console.log("Agregado a lista!!" + list.size());
  table.innerHTML += `
    <tr>
        <td id = "${count}" >${count}</td>
        <td onclick = "print()">${list.getLast().data}</td>
    <tr>    
    `;
  count++;
  console.log(list.getLast().data);
  
}

function print(){
    console.log("pérra flaco");
}


function noc() {
  table.innerHTML += `
       <tr>
       <td>1</td>
        <td>Flaco</td>
       </tr>
       <tr>
       <td>1</td>
        <td>Flaco</td>
       </tr>
       <tr>
       <td>1</td>
        <td>Flaco</td>
       </tr>
       <tr>
       <td>1</td>
        <td>Flaco</td>
       </tr>
       
        `;
}

//td id auto incremente;
