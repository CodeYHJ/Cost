<template>
  <div class="cost">
    <div class="time">
      <div class="date">
        <span class="month">5月</span>
        <span class="day">15日</span>
        <span class="week">星期五</span>
      </div>
      <div class="expenditure">支出：6878</div>
    </div>
    <div
      :class="['costItem', costList.length - 1 === index ? 'noBottor' : '']"
      v-for="(cost, index) in costList"
      :key="cost"
    >
      <Icon class="icon" name="icon-children" fontSize="20" />
      <div class="dsc">
        <span class="name">孩子</span>
        <div class="money">-6234</div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from "@com/Icon";
export default {
  name: "Cost",
  props: {
    costList: Array
  },
  components: { Icon }
};
</script>
<style lang="less" scoped>
@import "~@less/helper.less";
.cost {
  border-bottom: 1px solid #efefef;
  > .time {
    &:extend(.row_layout);
    font-size: 12px;
    justify-content: space-between;
    padding-bottom: 5px;
    color: #e9e9e9;
    padding: 5px 10px;
    border-bottom: 1px solid #e9e9e9;
    .day {
      padding-right: 5px;
    }
  }
  > .costItem {
    &:extend(.row_layout);
    align-items: center;
    > .dsc {
      &:extend(.row_layout);
      flex: 1;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e9e9e9;
      padding: 20px 0;
      > .money {
        padding-right: 10px;
      }
    }
    > .noBottor {
      border: none;
    }
    > .icon {
      padding: 3px;
      margin: 0 20px;
      border-radius: 50%;
      background: #efefef;
      color: @color-highlight;
    }
  }
}
</style>
