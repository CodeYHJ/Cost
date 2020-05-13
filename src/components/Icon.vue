<template>
  <div class="icons">
    <my-icons class="icon" :type="`icon-${name}`"></my-icons>
  </div>
</template>

<script>
import Icon from "ant-design-vue/lib/icon";
// import "ant-design-vue/lib/icon/style/css";
const myIcons = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1166214_9n2iphd765t.js",
  extraCommonProps: {
    style: {
      fontSize: "16px"
    }
  }
});
export default {
  props: ["name"],
  components: { myIcons },
  name: "Icon"
};
</script>

<style scoped></style>
