/// <reference path="../../typings/tsd.d.ts"/>
//Source file name      gameObject.ts
//Last Modified by      Vinay Bhardwaj
//Date last Modified    February 5,2016
//Program description   COMP392-Assignment 1-CubeMan    
//Revision History      v10
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var gameObject = (function (_super) {
        __extends(gameObject, _super);
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++
        function gameObject(geometry, material, x, y, z) {
            _super.call(this, geometry, material);
            this._geometry = geometry;
            this._material = material;
            this.position.x = x;
            this.position.y = y;
            this.position.z = z;
            this.receiveShadow = true;
            this.castShadow = true;
        }
        return gameObject;
    })(THREE.Mesh);
    objects.gameObject = gameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map