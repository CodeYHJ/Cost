<template>
  <div class="cost">
    <div class="time">
      <div class="date">
        <span class="month">{{ month }}月</span>
        <span class="day">{{ day }}日</span>
        <span class="week">{{ week }}</span>
      </div>
      <div class="expenditure">支出：{{ expenditureAmount }}</div>
    </div>
    <div class="costItem" v-for="(cost, index) in costList" :key="cost.id">
      <Icon class="icon" :name="cost.svg" fontSize="20" />
      <div :class="['dsc', costList.length - 1 === index ? 'noBorder' : '']">
        <span class="name">{{ cost.note }}</span>
        <div class="money" v-if="cost.type === '-'">-{{ cost.amount }}</div>
        <div class="money" v-else>+{{ cost.amount }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from "@com/Icon";
export default {
  name: "Cost",
  props: {
    costList: Array,
    month: Number,
    day: Number,
    expenditureAmount: Number,
    week: String
  },
  components: { Icon },
  data() {
    return {};
  }
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
    color: #cccccc;
    padding: 5px 10px;
    border-bottom: 1px solid #e9e9e9;
    .day {
      padding-right: 5px;
    }
  }
  > .costItem {
    .row_layout();
    align-items: center;
    > .dsc {
      .row_layout();
      flex: 1;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e9e9e9;
      padding: 20px 0;
      > .money {
        padding-right: 10px;
      }
    }
    > .noBorder {
      border-bottom: 0;
    }
    > .icon {
      padding: 5px;
      margin: 0 20px;
      border-radius: 50%;
      background: #efefef;
      color: @color-highlight;
    }
  }
}
</style>
