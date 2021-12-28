Math.components = function(theta) {
    return [Math.cos(theta), Math.sin(theta)];
};

// assumes that `positions' is the array containing anything needing to be rotated...
var mouseDragged = function() {
    println('dragging');
    var componentsX = Math.components(mouseX - pmouseX);
    var componentsY = Math.components(mouseY - pmouseY);
    positions.apply(function(v) {
        v.rotateY(componentsX);
        v.rotateX(componentsY);
    });
};