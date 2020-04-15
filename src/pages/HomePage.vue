<template>
  <v-content class="content">
    <v-img src="@/assets/coding.jpg" class="welcome-image">
       <v-theme-provider dark>
          <v-container fill-height>
            <v-row
              align="center"
              class="white--text mx-auto"
              justify="center"
            >
              <v-col
                class="white--text text-center"
                cols="12"
                tag="h1"
              >
                <span
                  class="font-weight-light"
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                >
                  WELCOME TO
                </span>

                <br>

                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                  class="font-weight-black"
                >
                  LUIRO.DEV
                </span>

              </v-col>

              <v-btn
                class="align-self-end"
                fab
                outlined
                @click="$vuetify.goTo('#introduction')"
              >
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
    </v-img>
    <section id="introduction">
      <v-container class="introduction">
        <v-col cols="12" align="center">
          <div
            :class="'display-2'"
            class="font-weight-bold"
            :style="{marginBottom: '10px'}"
          >
            INTRO
          </div>
          <v-divider class="divider" />
          <v-divider class="divider"/>
          <div class="title font-weight-light" :style="{marginTop: '30px'}">This site is under heavy construction. Please be patient.</div>
        </v-col>
      </v-container>
    </section>
  </v-content>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .content {
    background-color: var(--v-backgroundColor-base);
  }
  .welcome-image {
    height: 100vh;
  }
  .introduction {
    padding-top: 80px;
    height: 200vh;
  }
  .divider {
    width: 60px;
    margin: 5px;
  }
</style>