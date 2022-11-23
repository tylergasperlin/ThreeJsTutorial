import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const scene2 = new THREE.Scene();

/// camera 1 ///
// perspective camera has perspective - see notes
const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera1.position.z = 2;

/// camera 2 ///
// othographic = a cube in space - there is no perspective - see notes
const camera2 = new THREE.OrthographicCamera(-2, 2, 2, -2);
camera2.position.y = 2;
camera2.lookAt(new THREE.Vector3())

/// camera 3 ///
// othographic = a cube in space - there is no perspective - see notes
const camera3 = new THREE.OrthographicCamera(-2, 2, 2, -2);
camera3.position.x = -2;
camera3.lookAt(new THREE.Vector3(0,0,0))

/// camera 4 ///
// othographic = a cube in space - there is no perspective - see notes
const camera4 = new THREE.OrthographicCamera(-2, 2, 2, -2);
camera4.position.z = 2;

// there is a canvas element called c1 in index.html -- this is how three js gets loaded into the dom
const canvas1 = document.getElementById('c1') as HTMLCanvasElement;
const canvas2 = document.getElementById('c2') as HTMLCanvasElement;
const canvas3 = document.getElementById('c3') as HTMLCanvasElement;
const canvas4 = document.getElementById('c4') as HTMLCanvasElement;

const renderer1 = new THREE.WebGLRenderer({ canvas: canvas1 });
const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 });
const renderer3 = new THREE.WebGLRenderer({ canvas: canvas3 });
const renderer4 = new THREE.WebGLRenderer({ canvas: canvas4 });

// initial set width of canvas
renderer1.setSize(200, 200);
renderer2.setSize(200, 200);
renderer3.setSize(200, 200);
renderer4.setSize(200, 200);

// allows you to interact with 3d object by using mouse
//new OrbitControls(camera, renderer1.domElement)
new OrbitControls(camera1, renderer2.domElement);

const geometry = new THREE.TorusKnotGeometry();
//const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
});

const cube = new THREE.Mesh(geometry, material);
cube.scale.x = .5
cube.scale.y = .5
cube.scale.z = .5

scene.add(cube);

const cube2 = new THREE.Mesh(geometry, material);
scene2.add(cube2)

function animate() {
    requestAnimationFrame(animate);

    // comment this out if you want to stop the cube from rotating
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cube2.rotation.y += 0.01;

    render();
}

function render() {
    renderer1.render(scene, camera1);
    renderer2.render(scene, camera2);
    renderer3.render(scene2, camera3);
    renderer4.render(scene, camera4);
}

animate();
