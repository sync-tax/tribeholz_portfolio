import * as THREE from "three";

export function createScene() {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    18,
    window.innerWidth / window.innerHeight,
    10,
    1000
  );

  const pointLight = new THREE.PointLight(0xffffff, 150);
  const ambientLight = new THREE.AmbientLight(0xffffff, 10);

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#starHeader"),
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x0f0f0f);

  renderer.render(scene, camera);

  pointLight.position.set(0, 4, 6);

  return { scene, renderer, camera, pointLight, ambientLight }; // Export scene, camera, and light
}

export function createGeometry() {
  const star = new THREE.Mesh(
    new THREE.SphereGeometry(0.025),
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
    })
  );

  return { star };
}
