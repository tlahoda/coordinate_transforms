(function() {

  Math.piOverTwo = Math.PI / 2.0;

  Math.deg2rad = Math.PI / 180.0;

  this.toOrtho = function(point) {
    var slat;
    point[0] *= Math.deg2rad;
    point[1] *= Math.deg2rad;
    slat = Math.sin(Math.piOverTwo - point[0]);
    return [slat * Math.cos(point[1]), slat * Math.sin(point[1])];
  };

  this.toWebGL = function(point) {
    var clat;
    point[0] *= Math.deg2rad;
    point[1] *= Math.deg2rad;
    clat = Math.cos(point[0]);
    return [clat * Math.cos(point[1]), Math.sin(point[0]), -(clat * Math.sin(point[1]))];
  };

  this.scale = function(vertex, s, axis) {
    if (!axis) {
      return vertex.apply(function(ele, s) {
        return ele * s;
      }, s);
    }
    vertex[axis] *= s;
    return vertex;
  };

  this.shift = function(vertex, s, axis) {
    if (!axis) {
      return vertex.apply(function(ele, s) {
        return ele + s;
      }, s);
    }
    vertex[axis] += s;
    return vertex;
  };

  this.invert = function(vertex, bound, axis) {
    if (!axis) {
      return vertex.apply(function(ele, bound) {
        return bound - ele;
      }, bound);
    }
    vertex[axis] = bound - vertex[axis];
    return vertex;
  };

  return;

}).call(this);
