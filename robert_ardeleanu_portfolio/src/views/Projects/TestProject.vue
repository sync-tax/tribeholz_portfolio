<script setup>
import { ref } from "vue";

const chickenCount = ref(0);
const voidMsgVisible = ref(false);

function minusChicken() {
  if (chickenCount.value > 0) chickenCount.value--;
}
</script>

<template>
  <div class="testWrapper">
    <div class="chickenFarm">
      <div class="chickenHeader">
        <h5>this is a pretty</h5>
        <h1>Useless Placeholder Site</h1>
        <p>
          & this is a useless function to spawn chickens. There are currently
          {{ chickenCount }} Chickens on your farm...
        </p>
      </div>

      <div class="chickenBtnContainer">
        <button type="button" @click="chickenCount++">Chicken++</button>
        <button type="button" @click="minusChicken">Chicken--</button>
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

    <div class="chickenHeaderTwo">
      <h5>this is a pretty</h5>
      <h1>Useless Form</h1>
    </div>

    <div class="formContainer">
      <div>
        <label for="name" id="formName">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label for="email" id="formEmail">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label for="message" id="formMsg">Message:</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <button type="submit" @click="voidMsgVisible = !voidMsgVisible">
        Submit
      </button>
      <transition name="ease-in">
        <p v-if="voidMsgVisible" id="voidMsg">
          Your message just got lost in the void^^
        </p>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.rotated {
  transform: rotate(45deg);
  transition: transform 0.5s ease;
}

.ease-in-enter-active,
.ease-in-leave-active {
  transition: opacity 0.2s ease-in;
  overflow: hidden;
}

.ease-in-enter-from,
.ease-in-leave-to {
  opacity: 0;
  max-height: fit-content;
}
</style>
