<template>
  <nav>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="icon-app-statistics" />
      统计
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="icon-app-money" />
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="icon-app-label" />
      标签
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
nav {
  > a {
    color: #000000;
  }
  &:extend(.outerShadow);
  display: flex;
  flex-direction: row;
  font-size: 20px;
  color: #000000;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .selected {
    .icons {
      color: @color-highlight;
    }
  }
}
</style>
