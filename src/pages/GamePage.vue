<template>
  <ResponsiveGameWrapper>
      <router-view></router-view>
  </ResponsiveGameWrapper>
</template>

<script>
import ResponsiveGameWrapper from "@/lib/ResponsiveGameWrapper";

export default {
  components: {
    ResponsiveGameWrapper,
  },
};
</script>

<style lang="scss" module>

</style>