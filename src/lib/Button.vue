<template>
  <div
    @click="onClick"
    :class="[$style.container, $style.textButton, $style[this.kind], $style[this.size]]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    kind: {
      default: "primary",
    },
    size: {
      default: "medium",
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style lang="scss" module>
.container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 1000px; // Workaround for pill shaped button
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.textButton {
  @include mixins.text-base;
  letter-spacing: 0.2px;
}

.primary {
  color: variables.$on-primary-color;
  background-color: variables.$primary-color;
}

.primary:hover {
  background-color: variables.$primary-dark-1-color;
}

.medium {
  font-size: 15px;
  padding: 0 24px;
  height: 38px;
}

.large {
  font-size: 16px;
  padding: 0 50px;
  height: 44px;
}
</style>