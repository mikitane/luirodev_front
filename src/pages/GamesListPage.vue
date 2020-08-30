<template>
  <ResponsiveWrapper>
    <div :class="$style.container">
      <h5 :class="$style.header">All games</h5>
      <div :class="$style.gamesContainer">
        <GameListItem
          :class="$style.listItem"
          imageSrc="snakegame.jpg"
          title="The Snake Game"
          bodyText="Classical game from old Nokia phones. Can you reach 1000 points?"
          :linkTo="{ name: 'snake-game'}"
          :stars="4"
        />
        <GameListItem
          :class="$style.listItem"
          imageSrc="snakegame.jpg"
          title="The Snake Game"
          bodyText="Classical game from old Nokia phones. Can you reach 1000 points?"
          :linkTo="{ name: 'snake-game'}"
          :stars="4"
        />
        <GameListItem
          :class="$style.listItem"
          imageSrc="snakegame.jpg"
          title="The Snake Game"
          bodyText="Classical game from old Nokia phones. Can you reach 1000 points?"
          :linkTo="{ name: 'snake-game'}"
          :stars="4"
        />
        <GameListItem
          :class="$style.listItem"
          imageSrc="snakegame.jpg"
          title="The Snake Game"
          bodyText="Classical game from old Nokia phones. Can you reach 1000 points?"
          :linkTo="{ name: 'snake-game'}"
          :stars="4"
        />
      </div>
    </div>
  </ResponsiveWrapper>
</template>

<script>
import ResponsiveWrapper from "@/lib/ResponsiveWrapper";
import GameListItem from "@/components/GameListItem";

export default {
  components: {
    ResponsiveWrapper,
    GameListItem,
  },
};
</script>

<style lang="scss" module>
.container {
  margin: 40px 0 60px 0;
}

.gamesContainer {
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 40px;
}

.header {
  align-self: flex-start;
  margin-bottom: 20px;
}

@media only screen and (min-width: variables.$screen-md) {
  .gamesContainer {
    grid-template-columns: auto auto;
    justify-content: start;
    // justify-content: start;
    grid-row-gap: 30px;
    grid-column-gap: 28px;
  }
}

// @media only screen and (min-width: variables.$screen-lg) {
//   .gamesContainer {
//     grid-template-columns: auto auto auto;
//     // justify-content: space-between;
//     grid-row-gap: 40px;
//     grid-column-gap: 20px;
//   }
// }


@media only screen and (min-width: variables.$screen-lg) {
  .gamesContainer {
    grid-template-columns: auto auto;
    // justify-content: space-between;
    grid-row-gap: 40px;
    grid-column-gap: 40px;
  }
}

@media only screen and (min-width: variables.$screen-xl) {
  .gamesContainer {
    grid-template-columns: auto auto auto;
    grid-row-gap: 40px;
    grid-column-gap: 40px;
  }
}
</style>