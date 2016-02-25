/// <reference path="../../typings/tsd.d.ts"/>
///Source file name      control.ts
//Last Modified by      Vinay Bhardwaj
//Date last Modified    February 25,2016
//Program description   COMP392-Assignment 2 - Solar System    
//Revision History      v6

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

