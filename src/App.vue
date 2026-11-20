<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";

import TheExperience from "./components/TheExperience.vue";
import Button from "./components/common/Button.vue";

const buttons: Array<{ variant: string, color: '"pink" | "purple" | "mint"' }>
  = [
    { variant: "pet", color: "pink" },
    { variant: "play", color: "purple" },
    { variant: "feed", color: "mint" },
  ];

// const onClick = (variant: string) => {
//   console.log(variant);
// };
</script>

<template>
  <div>
    <TresCanvas clear-color="#82DBC5" window-size>
      <TheExperience />
    </TresCanvas>

    <div class="actions">
      <Button
        v-for="button of buttons"
        :key="button.variant"
        :color="button.color"
        @click="onClick(button.variant)"
      >
        {{ button.variant }}
      </Button>
    </div>
  </div>
</template>

<style>
.actions {
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  display: flex;
  gap: 0.5rem;
}
</style>
