<template>
  <ResponsiveWrapper>
    <div :class="$style.landingPage">
      <div :class="$style.mainContent">
        <div :class="$style.mainHeader">Games and Stuff</div>
        <p>
          Play some random games made by Miika Luiro.<br/>
          Watch out! You might get hooked.
        </p>
        <Button size="large" linkTo="games" :class="$style.exploreGamesButton">Explore games</Button>
      </div>
      <div :class="$style.illustrationWrapper">
        <img src="@/assets/ComputerTable.svg" :class="$style.illustration" />
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
  margin-bottom: 16px;
}

.exploreGamesButton {
  margin-top: 40px;
}

.illustrationWrapper {
  margin: 100px 20px 60px 20px;
}

@media only screen and (min-width: variables.$screen-md) {
  .landingPage {
    display: flex;
    align-items: center;
    // padding: 80px 0 80px 0;
    padding: 0;
    height: 500px;
  }
  .mainHeader {
    @include mixins.text-h3;
    margin-bottom: 16px;
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

@media only screen and (min-width: variables.$screen-lg) {
  .landingPage {
    height: 600px;
  }
}

</style>