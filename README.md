Coordinate Transforms
=======================

Coordinate transforms are a set of functions that alter a lat/lon point or
a coordinate vector. The functions include:

--------------------------------------------------------------------------

####toOrtho:
Converts a lat/lon point to a two dimensional orthrographic 
projection point.

```javascript
function toOrtho (point)
```

#####example:
```javascript
console.log (toOrtho ([-90, 0]));
```

#####outputs:
```
1.2246063538223773e-16, 0
```

--------------------------------------------------------------------------

####toWebGL:
Converts a lat/lon point to three dimensional WebGL point.

```javascript
function toWebGL (point)
```

#####example:
```javascript
console.log (toWebGL ([-90, 0]));
```

#####outputs:
```
6.123031769111886e-17, -1, 0
```

--------------------------------------------------------------------------

####scale:
Scales a vertex.

```javascript
function scale (vertex, s, axis)
```

#####example:
```javascript
console.log (scale ([1, 1, 1], 3));
```

#####outputs:
```
3, 3, 3
```

--------------------------------------------------------------------------

####shift:
Shifts a vertex.

```javascript
function shift (vertex, s, axis)
```

#####example:
```javascript
console.log (shift ([0, 0, 0], 10, 1));
```

#####outputs:
```
0, 10, 0
```

--------------------------------------------------------------------------

####invert:
Inverts a vertex.

```javascript
function invert (vertex, bound, axis)

```

#####example:
```javascript
console.log (invert ([0, 0, 3], 10, 2));
```

#####outputs:
```
0, 0, 7
```

--------------------------------------------------------------------------

####Copyright (C) 2011 Thomas P. Lahoda

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  
02110-1301  USA

