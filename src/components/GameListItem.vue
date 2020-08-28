<template>
  <div :class="$style.container">
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
  </div>
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
  transition: all .2s;
  cursor: pointer;
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
    width: 320px;
    height: 320px;
  }
}

@media only screen and (min-width: 1000px) {
  .container {
    width: 360px;
    height: 360px;
  }
}
</style>