/// <reference path="_reference.ts"/>

// MAIN GAME FILE

//Source file name      game.ts
//Last Modified by      Vinay Bhardwaj
//Date last Modified    February 25,2016
//Program description   COMP392-Assignment 2 - Solar System    
//Revision History      v6


// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
import CScreen = config.Screen;

//Custom empty Game Objects
var gameObject: Mesh;
var gameObject1: Mesh;
var gameObject2: Mesh;
var gameObject3: Mesh;
var gameObject4: Mesh;
var gameObject5: Mesh;
var gameObject6: Mesh;

var scene: Scene;
var renderer: Renderer;
var camera: PerspectiveCamera;
var camera1: PerspectiveCamera;
var camera2: PerspectiveCamera;
var axes: AxisHelper;
var ambientLight: AmbientLight;
var spotLight: SpotLight;
var spotLight1: SpotLight;
var spotLight2: SpotLight;
var spotLight3: SpotLight;
var control: Control;
var gui: GUI;
var stats: Stats;
var step: number = 0;
var sun: Mesh
var cam: number;

var group = new THREE.Object3D();

function init() {
    // Instantiate a new Scene object
    scene = new Scene();

    setupRenderer(); // setup the default renderer
	
    setupCamera(); // setup the camera
	
    // add an axis helper to the scene
    axes = new AxisHelper(10);
    scene.add(axes);
    console.log("Added Axis Helper to scene...");


    console.log("Added Plane Primitive to scene...");
    
    //Add a Cubes to the Scene
    
    var geometry = new THREE.SphereGeometry(5, 40, 40);
    var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    sun = new Mesh(geometry, material);
    sun.position.set(0, 0, 0);


    var geometry1 = new THREE.SphereGeometry(0.5, 32, 32);
    var material1 = new THREE.MeshLambertMaterial({ color: 0xCCC02B });
    var planetA = new Mesh(geometry1, material1);
    planetA.position.set(15, 0, 0);
    gameObject = new Mesh();
    gameObject.position.set(0, 0, 0);
    gameObject.add(planetA);

    var geometry2 = new THREE.SphereGeometry(1, 32, 32);
    var material2 = new THREE.MeshLambertMaterial( {color: 0x943E0F} );
    var planetB = new Mesh(geometry2, material2);
    planetB.position.set(30, 0, 0);
    var geometry7 = new THREE.SphereGeometry(0.4, 32, 32);
    var moon1material = new THREE.MeshLambertMaterial( {color: 0xFEFCD7} );
    var moon1 = new Mesh(geometry7, moon1material);
    moon1.position.set(4, 0, 0);
    gameObject6 = new Mesh();
    gameObject6.position.set(0, 0, 0);
    gameObject6.add(moon1);
    planetB.add(gameObject6);
    planetB.add(camera2);
    gameObject1 = new Mesh();
    gameObject1.position.set(0, 0, 0);
    gameObject1.add(planetB);

    var geometry3 = new THREE.SphereGeometry(1.5, 32, 32);
    var material3 = new THREE.MeshLambertMaterial( {color: 0xff3300} );
    var planetC = new Mesh(geometry3, material3);
    planetC.position.set(45, 0, 0);
    gameObject2 = new Mesh();
    gameObject2.position.set(0, 0, 0);
    gameObject2.add(planetC);


    var geometry4 = new THREE.SphereGeometry(2, 32, 32);
    var material4 = new THREE.MeshLambertMaterial({color: 0x28726E});
    var planetD = new Mesh(geometry4, material4);
    planetD.position.set(60, 0, 0);
    var geometry6 = new THREE.SphereGeometry(0.4, 32, 32);
    var moonmaterial = new THREE.MeshLambertMaterial( {color: 0xff9999} );
    var moon = new Mesh(geometry6, moonmaterial);
    moon.position.set(5, 0, 0);
    gameObject5 = new Mesh();
    gameObject5.position.set(0, 0, 0);
    gameObject5.add(moon);
    planetD.add(gameObject5);
    planetD.add(camera1);
    gameObject3 = new Mesh();
    gameObject3.position.set(0, 0, 0);
    gameObject3.add(planetD);


    var geometry5 = new THREE.SphereGeometry(0.75, 32, 32);
    var material5 = new THREE.MeshLambertMaterial( {color: 0xff0000} );
    var planetE = new Mesh(geometry5, material5);
    planetE.position.set(75, 0, 0);

    gameObject4 = new Mesh();
    gameObject4.position.set(0, 0, 0);
    gameObject4.add(planetE);

    
    //Adding game objects to the scene
    scene.add(sun);
    scene.add(gameObject);
    scene.add(gameObject1);
    scene.add(gameObject2);
    scene.add(gameObject3);
    scene.add(gameObject4);
    
    //Add an AmbientLight to the scene
    ambientLight = new AmbientLight(0x333333);
    scene.add(ambientLight);
    console.log("Added an Ambient Light to Scene");
	
    //Adding multiple SpotLights to the scene
    
    spotLight = new SpotLight(0xffffff, 30);
    spotLight.position.set(5, 0, 0);
    spotLight.lookAt(new Vector3(150, 0, 0));
    spotLight.castShadow = true;
    spotLight.shadowMapHeight = 2048;
    spotLight.shadowMapWidth = 2048;
    spotLight.shadowCameraNear = 1;
    scene.add(spotLight);

    spotLight1 = new SpotLight(0xffffff, 30);
    spotLight1.position.set(-5, 0, 0);
    spotLight1.lookAt(new Vector3(-150, 0, 0));
    spotLight1.castShadow = true;
    spotLight1.shadowMapHeight = 2048;
    spotLight1.shadowMapWidth = 2048;
    spotLight1.shadowCameraNear = 1;
    scene.add(spotLight1);

    spotLight2 = new SpotLight(0xffffff, 30);
    spotLight2.position.set(0, 0, 5);
    spotLight2.lookAt(new Vector3(0, 0, 150));
    spotLight2.castShadow = true;
    spotLight2.shadowMapHeight = 2048;
    spotLight2.shadowMapWidth = 2048;
    spotLight2.shadowCameraNear = 1;
    scene.add(spotLight2);

    spotLight3 = new SpotLight(0xffffff, 30);
    spotLight3.position.set(0, 0, -5);
    spotLight3.lookAt(new Vector3(0, 0, -150));
    spotLight3.castShadow = true;
    spotLight3.shadowMapHeight = 2048;
    spotLight3.shadowMapWidth = 2048;
    spotLight3.shadowCameraNear = 1;
    scene.add(spotLight3);

    console.log("Added all the SpotLight Lights to Scene");
    
    // add controls
    gui = new GUI();
    control = new Control(1);
    addControl(control);
    
    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");

    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    
    window.addEventListener('resize', onResize, false);
}

function onResize(): void {
    camera.aspect = CScreen.RATIO;
    //camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
}

function addControl(controlObject: Control): void {

    gui.add(controlObject, 'cam', 0, 2);
}

function addStatsObject() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}

// Setup main game loop
function gameLoop(): void {
    stats.update();
    //Rotation around all three axis
    gameObject.rotation.y += 0.045 //Rotating the Group around Y-Azis
    gameObject1.rotation.y += 0.035;
    gameObject2.rotation.y += 0.025;
    gameObject3.rotation.y += 0.015;
    gameObject4.rotation.y += 0.009;
    gameObject5.rotation.z += 0.020;
    gameObject6.rotation.z += 0.020;
    
    //gameObject5.rotation.y += 0.020;    
    
    //assigning control object to each cube
    
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
    cam = control.cam;
    if (cam < 0.5) {
        renderer.render(scene, camera1);
    }
    else if(cam >= 0.5 && cam <=1.5 ) {
        renderer.render(scene, camera);
    }
    else{
        renderer.render(scene, camera2);
    }
    
    
    //     renderer.render(scene, cam);
    // // if (cam == 2) {
    // //     renderer.render(scene, camera1);
    // // }
    // // else {
    // //     renderer.render(scene, camera);
    // // }
    // // render the scene
    
}

// Setup default renderer
function setupRenderer(): void {
    renderer = new Renderer();
    renderer.setClearColor(0x190000, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}

// Setup main camera for the scene
function setupCamera(): void {
    camera = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 10;
    camera.position.y = 60;
    camera.position.z = 120;
    camera.lookAt(new Vector3(0, -10, 0));
    console.log("Finished setting up Camera...");

    camera1 = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera1.position.x = 25;
    camera1.position.y = 0;
    camera1.position.z = 20;
    camera1.lookAt(new Vector3(0, 0, 0));
    console.log("Finished setting up Camera1...");
    
    camera2 = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera2.position.x = 8;
    camera2.position.y = 0;
    camera2.position.z = 5;
    camera2.lookAt(new Vector3(0, 0, 0));
    console.log("Finished setting up Camera2...");
}

