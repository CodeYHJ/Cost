<template>
  <div class="icons">
    <my-icons
      class="icon"
      :type="name"
      :style="`font-size:${fontSize}px`"
    ></my-icons>
  </div>
</template>

<script>
import Icon from "ant-design-vue/lib/icon";
// import "ant-design-vue/lib/icon/style/css";
const myIcons = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1166214_e4ng1up3jf.js"
});
export default {
  props: {
    name: String,
    fontSize: { type: String, default: "16" }
  },
  components: { myIcons },
  name: "Icon"
};
</script>

<style scoped>
.name {
  text-align: center;
}
</style>
