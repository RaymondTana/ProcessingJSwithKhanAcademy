PVector.prototype.rotateX = function(comp) {
    var y = this.y * comp[0] - this.z * comp[1];
    var z = this.z * comp[0] + this.y * comp[1];
    this.y = y;
    this.z = z;
};
PVector.prototype.rotateY = function(comp) {
    var x = this.x * comp[0] - this.z * comp[1];
    var z = this.z * comp[0] + this.x * comp[1];
    this.x = x;
    this.z = z;
};
PVector.prototype.rotateZ = function(comp) {
    var x = this.x * comp[0] - this.y * comp[1];
    var y = this.y * comp[0] + this.x * comp[1];
    this.x = x;
    this.y = y;
};
PVector.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ", " + this.z + ")";
};