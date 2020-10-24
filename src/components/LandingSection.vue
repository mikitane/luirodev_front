<template>
  <ResponsiveWrapper>
    <div :class="$style.landingPage">
      <div :class="$style.mainContent">
        <div :class="$style.mainHeader">Mini games in your browser</div>
        <p :class="$style.mainText">
          Play some browser-based mini games without the need to download an
          app. Watch out! These games might get you hooked!
        </p>
        <Button size="large" linkTo="games" :class="$style.exploreGamesButton"
          >Explore games</Button
        >
      </div>
      <div :class="$style.illustrationWrapper">
        <img
          src="@/assets/LuiroComputerTable.png"
          :class="$style.illustration"
        />
      </div>
    </div>
  </ResponsiveWrapper>
</template>

<script>
import Button from "@/lib/Button.vue";
import ResponsiveWrapper from "@/lib/ResponsiveWrapper";

export default {
  components: {
    Button,
    ResponsiveWrapper,
  },
};
</script>

<style lang="scss" module>
.landingPage {
  padding-top: 60px;
}

.mainHeader {
  @include mixins.text-h4;
  margin-bottom: 18px;
  max-width: 320px;
}

.mainText {
  max-width: 500px;
}

.exploreGamesButton {
  width: 100%;
  margin-top: 32px;
}

.illustration {
  width: 100%;
  height: auto;
}

.illustrationWrapper {
  margin: 100px 0 60px 0;
}

@media only screen and (min-width: variables.$screen-sm) {
  .exploreGamesButton {
    width: auto;
  }
}

@media only screen and (min-width: variables.$screen-md-minus) {
  .landingPage {
    display: flex;
    align-items: center;
    // padding: 80px 0 80px 0;
    padding: 0 0 70px 0;
    height: 450px;
  }
  .mainHeader {
    @include mixins.text-h3;
    margin-bottom: 16px;
    max-width: 480px;
  }

  .mainContent {
    flex: 1 1 0;
  }

  .illustration {
    width: 100%;
    height: auto;
  }

  .illustrationWrapper {
    margin: 0 0 0 100px;
    flex: 1 1 0;
  }
}

@media only screen and (min-width: variables.$screen-xl) {
  .landingPage {
    height: 500px;
  }
}
</style>