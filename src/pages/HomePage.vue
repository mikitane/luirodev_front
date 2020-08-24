<template>
  <v-content class="content">
    <div id="landing-page">
      <div id="landing-page-content">
        <div id="landing-page-info">
          <div class="landing-page-title">
            Games and stuff22
          </div>
          <div class="font-weight-light landing-page-subtitle">
            Explore random games made by Miika Luiro
          </div>
          <div id="landing-page-buttons-container">
            <Button :text="'Explore games'" class="explore-games-button" />
            <Button :text="'About me'" :outlined="true" class="about-me-button" />
          </div>
        </div>

        <div id="landing-page-illustration-container">
          <img src="@/assets/ComputerTable.svg" id="landing-page-illustration" />
        </div>
      </div>
    </div>

    <section id="introduction">
      <v-container fluid class="introduction">
        <v-col cols="12" align="center">
          <div
            :class="'display-2'"
            class="font-weight-bold app-white-text"
            :style="{marginBottom: '10px'}"
          >INTRO</div>
          <v-divider class="divider" />
          <v-divider class="divider" />
          <div
            class="title font-weight-light app-white-text"
            :style="{marginTop: '30px'}"
          >This site is under heavy construction. Please be patient.</div>
        </v-col>
      </v-container>
    </section>
  </v-content>
</template>

<script>
import Button from "@/reusable-components/Button";

export default {
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
.content {
  background-color: white; // var(--v-backgroundColor-base);
  height: 100%;
  overflow: auto;
}

#landing-page {
  width: 100%;
  height: 620px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

#landing-page-content {
  display: flex;
  flex: 0 0 1200px;
  margin-bottom: 35px;
}

#landing-page-info {
  align-self: center;
  flex: 1 1 0;
}

#landing-page-illustration-container {
  align-self: flex-end;
  flex: 1 1 0;
  z-index: 10;
}

#landing-page-illustration {
  width: 100%;
}

.app-white-text {
  color: black; // var(--v-textColorOnBackground-base);
}

.floor-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
}

.introduction {
  padding-top: 80px;
  height: 200vh;
  background-color: #1d2027;
}
.divider {
  width: 60px;
  margin: 5px;
}

.explore-games-button {
  flex: 0 0 240px;
}

.about-me-button {
  margin-left: 20px;
  flex: 0 0 240px;
}

#landing-page-buttons-container {
  display: flex;
  align-items: center;
  margin-top: 24px;
}

.landing-page-title {
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 4px;
  color: black; // var(--v-textColor-base);
}

.landing-page-subtitle {
  font-size: 1.5rem;
  line-height: 1;
  color: black; // var(--v-textColor-base);
}

// @media #{map-get($display-breakpoints, 'sm-and-down')} {
//   .landing-page-title {
//     font-size: 2.2rem;
//   }

//   .landing-page-subtitle {
//     font-size: 1.2rem;
//   }
// }

// @media  #{map-get($display-breakpoints, 'md-and-down')} {
//   #landing-page-content {
//     flex: 1 1 0;
//     padding: 0 20px 0 40px;
//   }
//   #landing-page-info {
//     margin-right: 40px;
//   }
// }

@media only screen and (max-width: 1150px) {
  #landing-page-buttons-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .explore-games-button {
    flex: 0 0 auto;
    width: 360px;
  }

  .about-me-button {
    margin-left: 0px;
    margin-top: 15px;
    flex: 0 0 auto;
    width: 360px;
  }
}

@media only screen and (max-width: 768px) {
  #landing-page {
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
  }

  #landing-page-content {
    flex-direction: column;
    padding: 0 20px;
  }

  #landing-page-illustration-container {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    align-self: stretch;
    flex: 1 1 0;
  }

  #landing-page-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1 1 0;
    margin: 0;
  }

  #landing-page-illustration {
    height: 80%;
    width: auto;
  }

  #landing-page-illustration-container {
    justify-content: center;
  }
}

</style>