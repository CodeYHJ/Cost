<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style lang="less">
@import "~@/less/helper.less";
@import "~@/less/reset.less";
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-family: @font-hei;
  font-size: 16px;
  line-height: 1.5;
  background: #f5f5f5;
}
</style>
