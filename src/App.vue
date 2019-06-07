<template>
  <div class="app">
    <left-layout class="left-container" />
    <router-view class="main-container" />
  </div>
</template>

<script>
import LeftLayout from "./components/LeftLayout.vue";
import { mapActions } from "vuex";

export default {
  name: "app",
  components: {
    LeftLayout
  },
  methods: {
    ...mapActions("github", ["getUserInfo"])
  },
  mounted() {
    this.getUserInfo();
  }
};
</script>

<style lang="scss">
.app {
  display: flex;
  height: 100%;
}

.left-container {
  flex: 0 0 199px;
  border-right: 1px solid #eeeeee;
  height: 100%;
}

.main-container {
  flex-grow: 1;
}
</style>
