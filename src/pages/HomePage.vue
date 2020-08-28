<template>
  <div>
    <LandingSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<script>
import LandingSection from "@/components/LandingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default {
  components: {
    LandingSection,
    AboutSection,
    ContactSection,
  },
};
</script>

<style lang="scss" module>

</style>