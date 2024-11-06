import * as THREE from "three";

export function createGeometry() {
  
    const star = new THREE.Mesh(
    new THREE.SphereGeometry(0.025),
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      wireframe: true,
    })
  );

  return { star };
}