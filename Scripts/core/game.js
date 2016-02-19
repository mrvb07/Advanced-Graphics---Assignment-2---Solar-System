/// <reference path="_reference.ts"/>
// MAIN GAME FILE
//Source file name      game.ts
//Last Modified by      Vinay Bhardwaj
//Date last Modified    February 5,2016
//Program description   COMP392-Assignment 1-CubeMan    
//Revision History      v10
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
//Custom Game Objects
var gameObject = objects.gameObject;
var scene;
var renderer;
var camera;
var axes;
var ambientLight;
var spotLight;
var control;
var gui;
var stats;
var step = 0;
var sun;
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
    //var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    var planetA = new Mesh(geometry1, material);
    planetA.position.set(15, 0, 0);
    sun.add(planetA);
    var geometry2 = new THREE.SphereGeometry(1, 32, 32);
    //var material = new THREE.MeshBasicMaterial( {color: 0xff5500} );
    var planetB = new Mesh(geometry2, material);
    planetB.position.set(30, 0, 0);
    sun.add(planetB);
    var geometry3 = new THREE.SphereGeometry(1.5, 32, 32);
    //var material = new THREE.MeshBasicMaterial( {color: 0xff3300} );
    var planetC = new Mesh(geometry3, material);
    planetC.position.set(45, 0, 0);
    sun.add(planetC);
    var geometry4 = new THREE.SphereGeometry(2, 32, 32);
    //var material = new THREE.MeshBasicMaterial( {color: 0xff1100} );
    var planetD = new Mesh(geometry4, material);
    planetD.position.set(60, 0, 0);
    sun.add(planetD);
    var geometry5 = new THREE.SphereGeometry(0.75, 32, 32);
    // var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    var planetE = new Mesh(geometry5, material);
    planetE.position.set(75, 0, 0);
    sun.add(planetE);
    scene.add(sun);
    // // Add an AmbientLight to the scene
    // ambientLight = new AmbientLight(0x444444);
    // scene.add(ambientLight);
    // console.log("Added an Ambient Light to Scene");
    // // Add a SpotLight to the scene
    // spotLight = new SpotLight(0xffffff);
    // spotLight.position.set(21, 70, 19);
    // //spotLight.rotation.set(37.261, 106.936, 3.164);
    // spotLight.lookAt(new Vector3(0, 0, 0));
    // spotLight.castShadow = true;
    // scene.add(spotLight);
    // console.log("Added a SpotLight Light to Scene");
    // add controls
    gui = new GUI();
    control = new Control(0.001);
    addControl(control);
    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");
    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    window.addEventListener('resize', onResize, false);
}
function onResize() {
    camera.aspect = CScreen.RATIO;
    //camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
}
function addControl(controlObject) {
    gui.add(controlObject, 'RotationYaxis', -0.05, 0.05); //Adding control for rotation around Y-Axis
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
function gameLoop() {
    stats.update();
    //Rotation around all three axis
    sun.rotation.y += control.RotationYaxis; //Rotating the Group around Y-Azis
    //assigning control object to each cube
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
    // render the scene
    renderer.render(scene, camera);
}
// Setup default renderer
function setupRenderer() {
    renderer = new Renderer();
    renderer.setClearColor(0x111111, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}
// Setup main camera for the scene
function setupCamera() {
    camera = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 0;
    camera.position.y = 50;
    camera.position.z = 100;
    camera.lookAt(new Vector3(0, 0, 0));
    console.log("Finished setting up Camera...");
}
//# sourceMappingURL=game.js.map