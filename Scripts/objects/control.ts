/// <reference path="../../typings/tsd.d.ts"/>
//Source file name      control.ts
//Last Modified by      Vinay Bhardwaj
//Date last Modified    February 5,2016
//Program description   COMP392-Assignment 1-CubeMan    
//Revision History      v10

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++
       
       
        public cam: number;

        // public color:number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(cam: number) {
            this.cam = cam;
        }
    }

}

