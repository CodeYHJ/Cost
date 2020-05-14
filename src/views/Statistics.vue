<template>
  <Layout>
    <div class="header">
      <h2>记账</h2>
      <div class="costBox">
        <div class="select">
          <div class="year">{{ year }}年</div>
          <div class="selectBox">
            <div class="month">
              <span style="font-size:26px;font-weight:bold;padding-right:2px">
                {{ month }} </span
              >月
            </div>
            <SelectMonth
              class="selectMonth"
              @selectDate="onSelectdate"
              :month="month"
              :year="year"
            >
              <div>
                <Icon fontSize="12" name="sanjiaojiantoushang" />
              </div>
            </SelectMonth>
          </div>
        </div>
        <div class="income">
          <div class="text">收入</div>
          <div class="number">
            <span class="integer">0</span>
            .
            <span class="decimal">00</span>
          </div>
        </div>
        <div class="outlay">
          <div class="text">支出</div>
          <div class="number">
            <span class="integer">0</span>
            .
            <span class="decimal">00</span>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import SelectMonth from "@com/Statistics/SelectMonth";
import moment from "moment";
import Icon from "@/components/Icon.vue";

export default {
  name: "Statistics",
  components: { Layout, SelectMonth, Icon },
  data() {
    return {
      time1: "",
      month: moment().month(),
      year: moment().year()
    };
  },
  methods: {
    onSelectdate(e) {
      Object.assign(this, e);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/less/helper.less";
.header {
  background: @color-background;
  font-size: 12px;
  .costBox {
    &:extend(.row_layout);
    padding: 5px 0;

    .select {
      display: flex;
      flex-direction: column;
      .year {
        text-align: center;
      }
      .selectBox {
        display: flex;
        align-items: center;
        padding: 0 20px;
        border-right: 1px solid #888888;
        .month {
          color: #000000;
          padding-right: 5px;
        }
      }
    }
    .income,
    .outlay {
      &:extend(.col_layout);
      justify-content: space-between;
      align-items: center;
      flex: 1;
      .number {
        .integer {
          font-size: 24px;
          color: #000000;
        }
      }
    }
  }
}
</style>
