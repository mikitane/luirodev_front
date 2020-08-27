<template>
  <ResponsivePage>
    <LandingSection />
    <AboutSection />
  </ResponsivePage>
</template>

<script>
import ResponsivePage from "@/lib/ResponsivePage";
import LandingSection from "@/components/LandingSection";
import AboutSection from "@/components/AboutSection";

export default {
  components: {
    ResponsivePage,
    LandingSection,
    AboutSection,
  },
};
</script>

<style lang="scss" module>

</style>