<template>
  <nav class="nav">
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="icon-app-statistics" fontSize="22" />
      明细
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="icon-app-money" fontSize="22" />
      记账
    </router-link>
    <router-link to="/me" class="item" active-class="selected">
      <Icon name="icon-app-me" fontSize="22" />
      我的
    </router-link>
  </nav>
</template>

<script>
import Icon from "@com/Icon";
export default {
  name: "Nav",
  components: { Icon }
};
</script>

<style lang="less" scoped>
@import "~@/less/helper.less";
.nav {
  font-family: @font-hei;
  > a {
    color: #000000;
  }
  &:extend(.outerShadow);
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: #000000;
  > .item {
    padding: 10px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  > .selected {
    .icons {
      color: @color-highlight;
    }
  }
}
</style>
