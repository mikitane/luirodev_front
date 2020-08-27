<template>
  <ResponsiveWrapper :class="$style.wrapperStyles">
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
  </ResponsiveWrapper>
</template>

<script>
import ResponsiveWrapper from "@/lib/ResponsiveWrapper";

export default {
  components: {
    ResponsiveWrapper,
  },
};
</script>

<style lang="scss" module>
.aboutPage {
  background-color: variables.$secondary-background-color;
  margin: 60px 0 60px 0;
}

.wrapperStyles {
  background-color: variables.$secondary-background-color;
}

.header {
  @include mixins.text-h6;
  margin-bottom: 20px;
}
</style>