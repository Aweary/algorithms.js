function WeightedQuickUnion(initCount) {

  var size = this.size = [];
  var parent = this.parent = [];
  var count = initCount;

  /* Initialize the union-find structure */
  for(var i = 0; i < count; i++) {
    parent[i] = i;
    size[i] = 1;
  }

  /* Return the number of components */
  this.count = function(){
    return count;
  };

  /* Return the component identifier for the component container */
  this.find = function(p){

    while(p !== parent[p]) {
      parent[p] = parent[parent[p]];
      p = parent[p];
    }
    return p;

  };

  /* Return whether two sites are connected */
  this.connected = function(p, q){
    return this.find(p) === this.find(q);
  };

  this.union = function(p, q){

    var rootP = this.find(p);
    var rootQ = this.find(q);
    if (rootP === rootQ) return;

    /* Make smaller root point to larger one */
    if(size[rootP] < size[rootQ]) {
      parent[rootP] = rootQ;
      size[rootQ] += size[rootP];
    }

    else {
      parent[rootQ] = rootP;
      size[rootP] += size[rootQ];
    }

    count--;

  };

}
