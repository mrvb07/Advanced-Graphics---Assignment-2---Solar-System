/// <reference path="../../typings/tsd.d.ts"/>
//Source file name      point.ts
//Last Modified by      Vinay Bhardwaj
//Date last Modified    February 25,2016
//Program description   COMP392-Assignment 2-Solar System      
//Revision History      v6
var objects;
(function (objects) {
    // POINT CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Point = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Point(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        return Point;
    })();
    objects.Point = Point;
})(objects || (objects = {}));
//# sourceMappingURL=point.js.map