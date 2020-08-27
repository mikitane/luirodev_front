<template>
  <ResponsiveWrapper>
    <div :class="$style.landingPage">
      <div :class="$style.mainHeader">Games and Stuff</div>

      <p>
        Explore random games made by Miika Luiro.
        Liirum laarum epsum es. Loorum epsum ipsum
        aarem os.
      </p>
      <Button
        size="large"
        @onClick="handleExploreGamesButtonClick"
        :class="$style.exploreGamesButton"
      >Explore games</Button>

      <img src="@/assets/ComputerTable.svg" :class="$style.landingPageIllustration" />
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
  methods: {
    handleExploreGamesButtonClick() {
      console.log("Clicked");
    },
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

.landingPageIllustration {
  margin: 120px 20px 60px 20px;
}
</style>