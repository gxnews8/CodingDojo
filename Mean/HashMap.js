function hashMap(n){
  this.table = [];
  this.size = n;
}

hashMap.prototype.set = function(key, val){
  var hashedKey = this.hash(key);
  var bucket = hashedKey % this.size;
  if(!this.table[bucket]){
    this.table[bucket] = new SList();
    this.table[bucket].add(key, value);
  }
  else{
    var current = this.table[bucket].head;
    if(current.value == val){
      this.head.value = val;
      current = null;
    }
    while(current.next){
      if(current.key == hashedKey){
        current.value = val;
      }
      current = current.next;
    }
    current.next = new SLNode(key, val);
  }
}
