<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { createScene } from "../js/scene.js";
import { createGeometry } from "../js/geometry.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

onMounted(() => {
  const { scene, renderer, camera, ambientLight } = createScene();

  const target = new THREE.Vector3(0, 0, 0);
  const radius = 75;

  //const controls = new OrbitControls(camera, renderer.domElement);

  function addStars() {
    const { star } = createGeometry();

    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(75));

    star.position.set(x, y, z);
    star.rotation.z = z * -0.1;
    scene.add(star);
  }
  Array(200).fill().forEach(addStars);

  scene.add(ambientLight);

  function animate() {
    requestAnimationFrame(animate);

    const angle = Date.now() * 0.00001; // Adjust the speed as needed
    camera.position.x = target.x - Math.sin(angle) * radius;
    camera.position.z = target.z + Math.cos(angle) * radius;

    camera.lookAt(target);
    //scontrols.update();

    renderer.render(scene, camera);
  }

  animate();
});
</script>

<template>
  <canvas id="starHeader"> </canvas>
</template>
