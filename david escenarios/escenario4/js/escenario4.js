//escenarios

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xB79BF9);


var loader = new THREE.TextureLoader();
loader.load(
  '', function(texture){
    scene.background = texture;
  }

);

//camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria 
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

camera.position.z = 50;

//animación
function animate() {
	requestAnimationFrame( animate );
    torusKnot.rotation.x += 0.05;
    torusKnot.rotation.y += 0.01;
    torusKnot.rotation.z += 0.06;
	renderer.render( scene, camera );
}
animate();