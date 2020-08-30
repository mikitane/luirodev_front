<template>
  <router-link :to="linkTo" :class="$style.container">
    <img :src="getImgUrl(imageSrc)" :class="$style.image" />
    <div :class="$style.infoContainer">
      <div>
        <h6 :class="$style.title">{{ title }}</h6>
        <p class="text-p-small">{{ bodyText }}</p>
      </div>
      <div :class="$style.stars">
        <v-icon
          name="star"
          v-for="i in 5"
          :key="i"
          :class="[$style.star, i <= stars ? $style.goldStar : $style.greyStart]"
        />
      </div>
    </div>
  </router-link>
</template>

<script>
import "vue-awesome/icons/star";

export default {
  props: {
    imageSrc: {
      required: true,
    },
    title: {
      required: true,
    },
    bodyText: {
      required: true,
    },
    stars: {
      required: true,
    },
    linkTo: {
      required: true,
    },
  },
  methods: {
    getImgUrl(url) {
      return require("../assets/" + url);
    },
  },
};
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  background-color: variables.$secondary-background-color;
  width: 100%;
  height: 380px;
  border-radius: 14px;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;
}

.container:hover {
  transform: scale(1.03);
}

.infoContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  flex: 1 1 0;
}

.image {
  width: 100%;
}

.title {
  margin-bottom: 16px;
}

.stars {
  align-self: flex-end;
}

.star:not(:first-child) {
  margin-left: 3px;
}

.goldStar {
  color: variables.$gold;
}

.greyStar {
  color: variables.$grey;
}

@media only screen and (min-width: variables.$screen-sm) {
  .container {
    width: 380px;
    height: 380px;
  }
}

@media only screen and (min-width: variables.$screen-md) {
  .container {
    width: 330px;
    height: 330px;
  }
}

@media only screen and (min-width: variables.$screen-lg) {
  .container {
    width: 390px;
    height: 390px;
  }
}

@media only screen and (min-width: variables.$screen-xl) {
  .container {
    width: 370px;
    height: 370px;
  }
}
</style>