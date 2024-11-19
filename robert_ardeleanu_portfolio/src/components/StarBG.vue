<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { createScene, createGeometry } from "../js/scene.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

onMounted(() => {
  const { scene, renderer, camera, ambientLight } = createScene();

  const target = new THREE.Vector3(0, 0, 0);
  const radius = 80;

  //const controls = new OrbitControls(camera, renderer.domElement);

  function addStars() {
    const { star } = createGeometry();

    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    star.rotation.z = z * -0.1;
    scene.add(star);
  }
  Array(400).fill().forEach(addStars);

  scene.add(ambientLight);

  const mouse = new THREE.Vector2();

  function trackX(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  }

  window.addEventListener("mousemove", trackX);

  function animate() {
    requestAnimationFrame(animate);

    const angle = Date.now() * 0.00005; // Adjust the speed as needed
    camera.position.x = target.x - Math.sin(angle) * radius * mouse.x;
    camera.position.z = target.z + Math.cos(angle) * radius;

    camera.lookAt(target);
    //controls.update();

    renderer.render(scene, camera);
  }

  animate();
});
</script>

<template>
  <div class="canvaswrapper">
    <canvas id="starHeader"> </canvas>
  </div>
</template>
