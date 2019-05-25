<template>
  <div class="about-me bga-back-top">
    <article class="markdown-body"
      v-html="renderedMarkdown" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("github", ["readmeMarkdown"]),
    renderedMarkdown() {
      const { readmeMarkdown } = this;
      return readmeMarkdown ? this.$marked(readmeMarkdown) : "";
    }
  },
  methods: {
    ...mapActions("github", ["getReadme"])
  },
  mounted() {
    this.getReadme();
  }
};
</script>

<style lang="scss" scoped>
.about-me {
  width: calc(100% - 260px); // 兼容 IE 10
  flex-grow: 1;
  padding: 30px;
  overflow-y: auto;
}
</style>