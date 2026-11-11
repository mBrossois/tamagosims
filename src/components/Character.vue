<script setup lang="ts">
import { useAnimations, useGLTF } from "@tresjs/cientos";
import { computed, watch } from "vue";

const { state: model } = useGLTF("/models/characters/Teddybear.glb");

const animations = computed(() => model.value?.animations || []);
const scene = computed(() => model.value?.scene);

// Use the same scene that is rendered in the template.
const { actions } = useAnimations(animations, scene);

// The actions object is shallowReactive, not a ref.
// Watching actions waits until its properties are populated.
watch(
  () => actions["idle.001"],
  (idle) => {
    if (idle) {
      idle.reset().fadeIn(0.2).play();
    }
  },
  { immediate: true },
);
</script>

<template>
  <primitive v-if="scene" :object="scene" />
</template>
