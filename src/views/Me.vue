<template>
  <Layout>
    <div class="me">
      <div class="bk1"></div>
      <div class="bk2"></div>
      <div class="info">
        <!-- <div class="login" v-if="$store.getters.isLogin">登陆</div>
        <div class="logout" v-else @click="login">
          <div class="iconSvg">
            <Icon name="icon-app-qian" fontSize="20" />
          </div>
          游客
        </div> -->
        <div class="logout">
          <div class="iconSvg">
            <Icon name="icon-app-qian" fontSize="20" />
          </div>
          游客
        </div>
      </div>
      <div class="costInfo">
        <div class="costDays">
          <span class="num">{{ dayTotal === 0 ? "-" : dayTotal }}</span>
          <span class="text">记账总天数</span>
        </div>
        <div class="costNum">
          <span class="num">{{ allCostNum === 0 ? "-" : allCostNum }}</span>
          <span class="text">记账总笔数</span>
        </div>
      </div>
      <div class="bill">
        <h3 class="title">账单</h3>
        <div class="billInfo">
          <div class="month">
            <span class="num">{{ new Date().getMonth() + 1 }}</span> 月
          </div>
          <div class="line"></div>
          <div class="inCome">
            <span class="text">收入</span>
            <div class="num">
              <span class="integer">{{ inComeAmount.integer }}</span>
              .
              <span class="decimal">{{ inComeAmount.decimal }}</span>
            </div>
          </div>
          <div class="expenditure">
            <span class="text">支出</span>
            <div class="num">
              <span class="integer">{{ expenditureAmount.integer }}</span>
              .
              <span class="decimal">{{ expenditureAmount.decimal }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@com/Layout";
import Icon from "@com/Icon";
import recordListModel from "@/models/recordListModel";

export default {
  name: "ME",
  components: { Layout, Icon },
  data() {
    return {
      dayTotal: 0,
      allCostNum: 0,
      expenditureAmountNum: null,
      inComeAmountNum: null
    };
  },
  methods: {
    login() {
      this.$store.commit("pageState/LOGIN_VISIBLE", { visible: true });
    },
    handleDate() {
      const recordList = recordListModel.clone(recordListModel.fetch());
      const [year, month] = recordListModel.getKeys();
      if (!recordList[year]) return;
      if (!recordList[year][month]) return;
      const list = recordList[year][month];
      this.inComeAmountNum = list.inComeAmount;
      this.expenditureAmountNum = list.expenditureAmount;
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
    const recordList = recordListModel.clone(recordListModel.fetch());
    let dayTotal = 0,
      allCostNum = 0;
    Object.keys(recordList).forEach(yearEl => {
      Object.keys(recordList[yearEl]).forEach(monthEl => {
        if (recordList[yearEl][monthEl].dayTotal) {
          dayTotal += recordList[yearEl][monthEl].dayTotal;
          allCostNum += recordList[yearEl][monthEl].allCostNum;
        }
      });
    });
    this.handleDate();
    Object.assign(this, { dayTotal, allCostNum });
  }
};
</script>

<style lang="less" scoped>
@import "~@less/helper";
.me {
  color: #000000;
  position: relative;
  > .bk1 {
    width: 100%;
    height: 200px;
    background: @color-highlight;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }
  > .bk2 {
    width: 100%;
    height: 100vh;
    background: #efefef;
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
  }
}
.info {
  padding: 30px 15px;
  > .logout {
    > .iconSvg {
      display: inline-block;
      padding: 10px;
      border-radius: 50%;
      background: #efefef;
      margin: 0 10px;
    }
  }
}
.costInfo {
  .row_layout();
  justify-content: space-around;
  padding-bottom: 20px;
  .costDays,
  .costNum {
    align-items: center;
    .col_layout();
    .num {
      font-size: 20px;
    }
  }
}
.bill {
  margin: 0 10px;
  background: #ffffff;
  border-radius: 6px;
  > .title {
    padding: 10px 20px;
  }
  > .billInfo {
    .row_layout();
    align-items: center;
    padding: 10px 20px;
    .month {
      padding: 0 10px;
      .num {
        font-size: 20px;
      }
    }
    .line {
      width: 1px;
      background: #000000;
      height: 30px;
      margin: 0 10px;
    }
    .inCome,
    .expenditure {
      .col_layout();
      align-items: center;
      padding: 0 10px;
      .num {
        width: 100px;

        .row_layout();
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
