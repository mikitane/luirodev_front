<template>
  <ResponsiveWrapper>
    <div :class="$style.container">
      <div :class="$style.section">
        <h5 :class="$style.header">Contact</h5>
        <div :class="$style.contactRow">
          <v-icon name="phone" :class="$style.icon" />
          <p class="text-p-small">+358 400 508 478</p>
        </div>
        <div :class="$style.contactRow">
          <v-icon name="envelope" :class="$style.icon" />
          <p class="text-p-small">miika@luiro.dev</p>
        </div>
        <div :class="$style.contactRow">
          <v-icon name="brands/linkedin" :class="$style.icon" />
          <a href="https://www.linkedin.com/in/miika-luiro/" class="text-p-small">Miika Luiro</a>
        </div>
        <div :class="$style.contactRow">
          <v-icon name="brands/github" :class="$style.icon" />
          <a href="https://github.com/mikitane" class="text-p-small">mikitane</a>
        </div>
      </div>
      <div :class="$style.section">
        <h5 :class="$style.header">Project in Github</h5>
        <div :class="$style.contactRow">
          <v-icon name="brands/github" :class="$style.icon" />
          <a href="https://github.com/mikitane/luirodev_front" class="text-p-small">Frontend</a>
        </div>
        <div :class="$style.contactRow">
          <v-icon name="brands/github" :class="$style.icon" />
          <a href="https://github.com/mikitane/luirodev_backend" class="text-p-small">Backend</a>
        </div>
      </div>
    </div>
  </ResponsiveWrapper>
</template>

<script>
import "vue-awesome/icons/phone";
import "vue-awesome/icons/envelope";
import "vue-awesome/icons/brands/linkedin";
import "vue-awesome/icons/brands/github";

import ResponsiveWrapper from "@/lib/ResponsiveWrapper";

export default {
  components: {
    ResponsiveWrapper,
  },
};
</script>

<style lang="scss" module>
.container {
  padding: 60px 0 80px 0;
}

.header {
  margin-bottom: 20px;
}

.section {
  max-width: 500px;
}

.section:not(:first-child) {
  margin-top: 80px;
}

.icon {
  color: variables.$on-background-color;
  width: 16px;
  height: auto;
}

.contactRow {
  display: flex;
  align-items: center;
}

.contactRow > *:first-child {
  margin-right: 20px;
}

.contactRow:not(:first-child) {
  margin-top: 10px;
}

@media only screen and (min-width: variables.$screen-md-minus) {
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .section {
    flex: 1 1 0;
  }

  .section:not(:first-child) {
    margin: 0 0 0 80px;
  }
}
</style>