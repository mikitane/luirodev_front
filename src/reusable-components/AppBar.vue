<template>
  <div id="navbar">
    <div id="navbar-content">
      <img src="@/assets/LuiroDevLogo.png" alt="Luiro Dev Logo" class="logo" />
      <nav>
        <router-link to="games" class="headline link">Games</router-link>
        <router-link to="contact" class="headline link">Contact</router-link>
      </nav>
    </div>
  </div>

  <!-- <v-app-bar app :color="color" :flat="flat">
    <v-app-bar-nav-icon>
      <v-img src="@/assets/LuiroDevLogo.png" :style="{marginLeft: '16px'}" width="40px" height="40px" :contain="true"/>
    </v-app-bar-nav-icon>
  </v-app-bar>-->
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0
    };
  },
  computed: {
    isTransparent: function() {
      return this.transparentAtStart && this.scrollPosition === 0;
    }
  },
  props: {
    absolute: { default: true },
    flat: { default: true },
    color: { default: "appBarColor" },
    invertedScroll: { default: false },
    transparentAtStart: { default: false }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
    }
  }
};
</script>

<style lang="scss" scoped>

#navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  flex: 0 0 70px;
  background-color: white; // var(--v-backgroundColor-base);
}

#navbar-content {
  display: flex;
  align-items: center;
  width: 1200px;
}

.logo {
  height: 40px;
  margin-right: 32px;
}

.link {
  color: black; // var(--v-textColorOnBackground-base);
  text-decoration: none;
  margin-right: 16px;
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