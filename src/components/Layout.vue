<template>
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot />
    </div>
    <Nav class="nav" />
    <a-drawer
      placement="bottom"
      :visible="$store.getters.visible"
      @close="onClose"
      height="100vh"
      destroyOnClose
    >
      1232
    </a-drawer>
  </div>
</template>

<script>
import Nav from "@com/Nav";
export default {
  props: ["classPrefix"],
  components: { Nav },
  name: "Layout",
  data() {
    return {};
  },
  methods: {
    onClose() {
      this.$store.commit("pageState/LOGIN_VISIBLE", { visible: false });
    }
  }
};
</script>

<style lang="less" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.content {
  flex: 1;
}
.nav {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
}
</style>
