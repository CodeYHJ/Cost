<template>
  <Layout>
    <div class="header">
      <h2 style="text-align:center">闲时记账</h2>
      <div class="costBox">
        <div class="select">
          <div class="year">{{ year }}年</div>
          <div class="selectBox">
            <div class="month">
              <span> {{ month + 1 }} </span>月
            </div>
            <SelectMonth
              class="selectMonth"
              @selectDate="onSelectdate"
              :month="month"
              :year="year"
            >
              <div>
                <Icon fontSize="12" name="icon-app-triangle" />
              </div>
            </SelectMonth>
          </div>
        </div>
        <div class="income">
          <div class="text">收入</div>
          <div class="number">
            <span class="integer">{{ inComeAmount.integer }}</span>
            .
            <span class="decimal">{{ inComeAmount.decimal }}</span>
          </div>
        </div>
        <div class="outlay">
          <div class="text">支出</div>
          <div class="number">
            <span class="integer">{{ expenditureAmount.integer }}</span>
            .
            <span class="decimal">{{ expenditureAmount.decimal }}</span>
          </div>
        </div>
      </div>
      <!-- <Tip v-if="!$store.getters.isLogin" /> -->
    </div>
    <div class="content">
      <Cost
        v-for="cost in list"
        :costList="cost.tags"
        :key="cost.createdAt"
        :month="new Date(cost.createdAt).getMonth() + 1"
        :day="new Date(cost.createdAt).getDate()"
        :week="handleWeek(new Date(cost.createdAt).getDay())"
        :expenditureAmount="cost.expenditureAmount"
      >
        {{ cost.createdAt }}
      </Cost>
    </div>
  </Layout>
</template>

<script>
import Layout from "@com/Layout.vue";
import SelectMonth from "@com/Statistics/SelectMonth";
// import Tip from "@com/Tip";
import moment from "moment";
import Icon from "@com/Icon.vue";
import Cost from "@com/Statistics/Cost";
import recordListModel from "@/models/recordListModel";

export default {
  name: "Statistics",
  components: { Layout, SelectMonth, Icon, Cost },
  data() {
    return {
      time1: "",
      month: moment().month(),
      year: moment().year(),
      list: {},
      expenditureAmountNum: null,
      inComeAmountNum: null
    };
  },
  methods: {
    onSelectdate(e) {
      const { year, month } = e;
      Object.assign(this, e);
      this.inComeAmountNum = null;
      this.expenditureAmountNum = null;
      this.list = this.handleDate(year, month + 1);
    },
    handleWeek(week) {
      const weekList = [
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
        "星期日"
      ];
      return weekList[week - 1];
    },
    handleDate(year, month) {
      const recordList = recordListModel.clone(recordListModel.fetch());
      if (!recordList[year]) return {};
      if (!recordList[year][month]) return {};
      const list = recordList[year][month];
      this.inComeAmountNum = list.inComeAmount;
      this.expenditureAmountNum = list.expenditureAmount;
      return list.days;
    }
  },
  computed: {
    inComeAmount() {
      let amount = 0,
        integer,
        decimal;

      amount = this.inComeAmountNum;
      if (!amount) return { integer: "0", decimal: "00" };
      if (String(amount).indexOf(".") > 0) {
        const nums = String(amount).split(".");
        integer = nums[0].toString();
        decimal = nums[1].toString();
      } else {
        integer = amount.toString();
        decimal = "00";
      }
      return { integer, decimal };
    },
    expenditureAmount() {
      let amount = 0,
        integer,
        decimal;
      amount = this.expenditureAmountNum;
      if (!amount) return { integer: "0", decimal: "00" };

      if (String(amount).indexOf(".") > 0) {
        const nums = String(amount).split(".");
        integer = nums[0].toString();
        decimal = nums[1].toString();
      } else {
        integer = amount.toString();
        decimal = "00";
      }
      return { integer, decimal };
    }
  },
  created() {
    const [year, month] = recordListModel.getKeys();
    this.list = this.handleDate(year, month);
  }
};
</script>

<style lang="less" scoped>
@import "~@less/helper";
.header {
  background: @color-background;
  font-size: 12px;
  .costBox {
    .row_layout();
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
          > span {
            font-size: 26px;
            font-weight: bold;
            padding-right: 2px;
            width: 40px;
            display: inline-block;
            text-align: center;
          }
        }
      }
    }
    .income,
    .outlay {
      .col_layout();
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
.content {
  height: 530px;
  padding-bottom: 70px;
  overflow: auto;
}
</style>
