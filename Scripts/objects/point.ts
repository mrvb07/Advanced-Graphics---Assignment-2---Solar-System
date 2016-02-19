/// <reference path="../../typings/tsd.d.ts"/>
//Source file name      point.ts
//Last Modified by      Vinay Bhardwaj
//Date last Modified    February 5,2016
//Program description   COMP392-Assignment 1-CubeMan    
//Revision History      v10
module objects {
    // POINT CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Point { 
        public x:number;
        public y:number;
        public z:number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(x:number, y:number, z:number) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }
}
