<template>
  <nav class="nav">
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="icon-app-statistics" fontSize="20" />
      统计
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="icon-app-money" fontSize="20" />
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="icon-app-label" fontSize="20" />
      标签
    </router-link>
  </nav>
</template>

<script>
import Icon from "@com/Icon";
export default {
  name: "Nav",
  components: { Icon },
};
</script>

<style lang="less" scoped>
@import "~@/less/helper.less";
.nav {
  > a {
    color: #000000;
  }
  &:extend(.outerShadow);
  display: flex;
  flex-direction: row;
  font-size: 14px;
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
