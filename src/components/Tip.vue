<template>
  <div class="tip" @click="showDraw">
    <Icon class="icon" name="icon-app-gantanhao" />
    登陆后数据可以实时备份，更安全哦
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "Tip",
  components: { Icon },
  methods: {
    showDraw() {
      this.$store.commit("pageState/LOGIN_VISIBLE", { visible: true });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@less/helper.less";
.tip {
  background: #fff8e0;
  &:extend(.row_layout);
  padding: 5px 0;
  color: #fe4649;
  > .icon {
    padding: 0 15px;
  }
}
</style>
