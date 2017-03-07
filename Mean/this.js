var Node = function(val){
  this.val = val;
  this.next = null;
}
Node.prototype.passThis = function(custon_return){
  console.log(this, "this");
  console.log(this.self, "self");
  console.log(custon_return, "My return");
  return custon_return;
}

var SingleList = function(){
  this.head = null;
}
SingleList.prorotype.add = function(val){
  if (!this.head) {
    this.head = new Node(val);
    return this;
  }
  var current = this.head;
  while (current.next) {
    current = current.next;
  }
  current.next = new Node(val);
  return this;
}
SingleList.prototype.dequeue = function (callback) {
  var eliminatedNode = this.head;
  this.head = this.nead.next;
  eliminatedNode.next = null;
  if (typeof(callback) == 'function') {
    callback(eliminatedNode);
  }
  return this;
};
sList = new SingleList();
sList.add(1).add(2).add(3).add(4).head.next.passThis(sList).dequeue(
  function callback(myNode) {
    console.log(myNode.val, "CHAINING INSANITY!");
  }
).dequeue(
  function anotherCallback(myNode) {
    console.log("***************************");
    console.log("Seriously, Stop!",myNode);
  }
);
