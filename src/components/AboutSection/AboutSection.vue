<template>
  <div :class="$style.aboutPage">
    <div :class="$style.header">What is this page?</div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.aboutPage {
  margin: 100px 0 40px 0;
}

.header {
  @include mixins.text-h6;
  margin-bottom: 20px;
}
</style>