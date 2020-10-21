<template>
  <ResponsiveWrapper :class="$style.wrapperStyles">
    <div :class="$style.container">
      <div :class="$style.innerContainer">
        <div :class="$style.section">
          <img
            src="@/assets/luirodev-3d-illustration.png"
            :class="$style.illustration"
          />
        </div>
        <div :class="$style.section">
          <h5 :class="$style.header">What is this page?</h5>
          <p>
            Here you can play some browser-based mini games that are usually
            quite simple but addictive. This site is a hobby project made for
            fun and also for practicing some new web techonologies.
          </p>
        </div>
      </div>

      <div :class="$style.innerContainer">
        <div :class="$style.section">
          <h5 :class="$style.header">Want to participate?</h5>
          <p>
            Contact me or open a pull request in Github if you would like to
            participate in this project. All efforts are highly appreciated. You
            could help fixing bugs, develop new games or create better
            illustrations for existing games.
          </p>
        </div>
      </div>
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
.innerContainer {
  background-color: variables.$secondary-background-color;
  margin: 60px 0 60px 0;
}

.wrapperStyles {
  background-color: variables.$secondary-background-color;
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

.illustration {
  width: 100%;
  height: auto;
}

.illustrationWrapper {
  margin: 0 20px 0 20px;
}

@media only screen and (min-width: variables.$screen-md-minus) {
  .innerContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .section {
    flex: 1 1 0;
  }

  .section:not(:first-child) {
    margin: 0 0 0 80px;
  }

  .illustration {
    width: 100%;
    height: auto;
  }
}
</style>