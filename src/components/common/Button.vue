<script setup lang="ts">
defineProps<{
  // eslint-disable-next-line style/member-delimiter-style
  color: "pink" | "purple" | "mint";
}>();

const emits = defineEmits(["click"]);
</script>

<template>
  <button class="btn" :class="color" @click="emits('click')">
    <span class="text"><slot /></span>
  </button>
</template>

<style scoped>
.btn {
  --bg-color: #fc92bb;
  --border-color: #b9657d;
  --shadow-color: #d6518a;

  --bg-color-hover: #f99bbf;

  --bg-color-clicked: #fca1c4;

  position: relative;
  width: 5.5rem;
  height: 2.5rem;
  text-transform: uppercase;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;

  background-color: var(--bg-color);
  border-color: var(--border-color);
  -webkit-box-shadow: inset 0px -3px 0px var(--shadow-color);
  -moz-box-shadow: inset 0px -3px 0px var(--shadow-color);
  box-shadow: inset 0px -3px 0px var(--shadow-color);

  transition: all 100ms ease-in-out;

  &.purple {
    --bg-color: #be89ef;
    --border-color: #8b40c5;
    --shadow-color: #7b4cb7;

    --bg-color-hover: #c390f3;

    --bg-color-clicked: #c997f9;
  }

  &.mint {
    --bg-color: #70e3bb;
    --border-color: #5b9e96;
    --shadow-color: #3cbda9;

    --bg-color-hover: #7beec6;

    --bg-color-clicked: #84f8cf;
  }

  & .text {
    font-size: 24px;
    font-family: monospace;
    font-weight: 600;
    color: white;
    -webkit-text-stroke: 1px #250000;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  &:hover {
    cursor: pointer;
    background-color: var(--bg-color-hover);
    -webkit-box-shadow: inset 0px -2px 0px var(--shadow-color);
    -moz-box-shadow: inset 0px -2px 0px var(--shadow-color);
    box-shadow: inset 0px -2px 0px var(--shadow-color);
  }

  &:active {
    background-color: var(--bg-color-clicked);

    -webkit-box-shadow: inset 0px -1px 0px var(--shadow-color-clicked);
    -moz-box-shadow: inset 0px -1px 0px var(--shadow-color-clicked);
    box-shadow: inset 0px -1px 0px var(--shadow-color);
  }
}
</style>
