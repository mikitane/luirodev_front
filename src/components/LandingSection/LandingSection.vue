<template>
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
</template>

<script>
import Button from "@/lib/Button.vue";

export default {
  components: {
    Button,
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
  padding-top: 42px;
}

.mainHeader {
  @include mixins.text-h4;
  margin-bottom: 16px;
}

.exploreGamesButton {
  margin-top: 30px;
}

.landingPageIllustration {
  margin: 80px 0 0 0;
}
</style>