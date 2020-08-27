<template>
  <div :class="$style.navbar">
    <div :class="$style.navbarContent">
      <div :class="$style.navbarLeftContent">
        <img src="@/assets/LuiroDevLogo.png" alt="Luiro Dev Logo" :class="$style.logo" />
        <nav :class="$style.desktopNav">
          <router-link to="games" class="text-nav" :class="[$style.desktopLink]">Games</router-link>
          <router-link to="contact" class="text-nav" :class="[$style.desktopLink]">Contact</router-link>
        </nav>
      </div>
      <div :class="$style.navbarRightContent">
        <v-icon name="bars" :class="$style.mobileMenuIcon" @click="showMobileMenuIcon(true)" />
      </div>

      <transition name="mobileMenu-transition">
        <div :class="$style.mobileMenu" v-if="mobileNavMenuIsOpen">
          <router-link to="games" class="text-nav">Games</router-link>
          <router-link to="contact" class="text-nav">Contact</router-link>
          <v-icon name="times" :class="$style.mobileMenuIcon" @click="showMobileMenuIcon(false)" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import "vue-awesome/icons/bars";
import "vue-awesome/icons/times";

export default {
  components: {},
  data() {
    return {
      mobileNavMenuIsOpen: false,
    };
  },

  methods: {
    showMobileMenuIcon(value) {
      this.mobileNavMenuIsOpen = value;
    },
  },
};
</script>

<style lang="scss" module>
.navbar {
  display: flex;
  align-items: center;
}

.navbarContent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 auto;
  z-index: 100;
  height: 70px;
  margin: 0 20px;
}

.navbarLeftContent {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
}

.navbarRightContent {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  margin-left: 40px;
}

.logo {
  height: 40px;
  margin-right: 32px;
}

.mobileMenuIcon {
  color: variables.$on-background-color;
  height: 26px;
  width: auto;
}

.desktopLink:not(:last-child) {
  margin-right: 32px;
}

.desktopNav {
  display: none;
}

.mobileMenu {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: red;
}

.mobileMenu-transition-enter {
  opacity: 0;
}

.mobileMenu-transition-enter-active {
  transition: opacity 0.5s;
}

.mobileMenu-transition-leave-to {
  opacity: 0;
}

.mobileMenu-transition-leave-active {
  transition: opacity 0.3s;
}

@media only screen and (min-width: variables.$screen-sm) {
  .desktopNav {
    display: block;
  }

  .mobileMenuIcon {
    display: none;
  }

  .navbarContent {
    margin: 0 40px;
  }
}


@media only screen and (min-width: variables.$screen-lg) {
  .navbar {
    justify-content: center;
  }

  .navbarContent {
    flex: 0 0 1200px;
  }
}

// @media #{map-get($display-breakpoints, 'md-and-down')} {
//   #navbar-content {
//     flex: 1 1 0;
//     padding: 0 40px;
//   }
// }

// @media #{map-get($display-breakpoints, 'xs-only')} {
//   #navbar-content {
//     padding: 0 20px;
//   }
// }
</style>