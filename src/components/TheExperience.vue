<script setup lang="ts">
import Character from "./Character.vue";

// const { onBeforeRender } = useLoop()

// const boxRef = shallowRef<TresObject | null>(null)

// onBeforeRender(({ elapsed }) => {
//   if (boxRef.value) {
//     boxRef.value.rotation.y = elapsed
//     boxRef.value.rotation.z = elapsed
//   }
// })
</script>

<template>
  <TresPerspectiveCamera :position="[5, 5, 5]" :look-at="[0, 0, 0]" />
  <TresAmbientLight :intensity="0.5" color="white" />
  <Character />
  <TresDirectionalLight :position="[0, 2, 4]" :intensity="1" cast-shadow />
  <TresAxesHelper />
  <TresGridHelper :args="[10, 10]" />
</template>
