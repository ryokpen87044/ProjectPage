<script setup>
import part from "../modules/globals/part.vue";
import purpose from "../modules/about/purpose.vue";
import motivation from "../modules/about/motivation.vue";
</script>

<template>
  <div
      class="animate-bg-in absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none bg-zinc-900 bg-opacity-50 backdrop-blur-sm">
    <div class="mt-32 flex flex-col items-center font-Default text-white">
      <div class="animate-session-in">
        <h1 class="font-bold text-center text-6xl md:text-7xl">About</h1>
      </div>
      <div class="mt-10 mb-60 flex flex-col items-center w-3/4 md:w-2/5">
        <part title="目的"/>
        <purpose/>
        <part title="動機"/>
        <motivation/>
      </div>
    </div>
  </div>
</template>
