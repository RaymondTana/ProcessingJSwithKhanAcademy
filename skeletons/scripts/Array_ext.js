Array.prototype.apply = function(f) {
    for(var i in this) {
        this[i] = f(this[i]);
    }
};
Array.prototype.fill = function(c) {
    this.apply(function(x) { return c; });
};
Array.init = function(f, N) {
    var output = [];
    for(var i = 0; i < N; i ++) {
        output[i] = f(i);
    }
    return output;
};
Array.apply = function(array, f) {
    var output = [];
    for(var i in array) {
        output[i] = f(array[i]);
    }
    return output;
};
