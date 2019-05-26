<template>
  <ul class="label-list">
    <li @click="setActiveLabelHandle(null)">
      <span class="tag"
        v-if="!activeLabel"
        style="background-color: #3593f2;">ALL</span>
      <span class="tag tag-unchecked"
        v-else>ALL</span>
    </li>
    <li v-for="label in labels"
      :key="label.id"
      @click="setActiveLabelHandle(label)">
      <span class="tag"
        v-if="activeLabel && activeLabel.name === label.name"
        :style="{ backgroundColor: '#' + label.color}">{{label.name}}</span>
      <span v-else
        class="tag tag-unchecked">{{label.name}}</span>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("github", ["labels", "activeLabel"])
  },
  methods: {
    ...mapActions("github", ["setActiveLabel"]),
    setActiveLabelHandle(label) {
      console.log("this.$route.name", this.$route.name);
      if (this.$route.name === "blog") {
        this.setActiveLabel(label);
        this.$router.push("/");
      } else {
        if (this.activeLabel && label && this.activeLabel.name === label.name) {
          this.setActiveLabel(null);
        } else {
          this.setActiveLabel(label);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.label-list {
  list-style: none;
  flex-shrink: 0;
  padding: 20px 26px 0px 50px;
  display: flex;
  flex-wrap: wrap;
  li {
    margin-bottom: 20px;
    margin-right: 10px;
  }
}

.tag-unchecked {
  background-color: #f2f5f8;
  color: #849aa4;
}
</style>