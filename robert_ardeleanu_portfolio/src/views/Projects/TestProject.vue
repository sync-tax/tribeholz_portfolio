<script setup>
import { ref } from "vue";

const chickenCount = ref(3);

function minusChicken() {
  if (chickenCount.value > 0) chickenCount.value--;
}
</script>

<template>
  <div class="chickenFarm">
    <div class="chickenHeader">
      <h5>this is a pretty</h5>
      <h1>Useless Placeholder Site</h1>
      <p>
        & this is a useless function to spawn chickens for no reason but to
        showcase my awesome css grid skills. (will be adding the real projects
        soon...)
      </p>
    </div>

    <div class="chickenBtnContainer">
      <button type="button" @click="chickenCount++">
        Chicken++ ({{ chickenCount }})
      </button>
      <button type="button" @click="minusChicken">
        Chicken-- ({{ chickenCount }})
      </button>
    </div>
    <div class="chickenImages">
      <img
        v-for="i in chickenCount"
        :key="i"
        src="/src/assets/images/chicken.png"
        alt="chicken"
        width="300px"
      />
    </div>
  </div>
</template>
