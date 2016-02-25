/// <reference path="../../typings/tsd.d.ts"/>
///Source file name      control.ts
//Last Modified by      Vinay Bhardwaj
//Date last Modified    February 25,2016
//Program description   COMP392-Assignment 2 - Solar System    
//Revision History      v6
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // public color:number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(cam) {
            this.cam = cam;
        }
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map