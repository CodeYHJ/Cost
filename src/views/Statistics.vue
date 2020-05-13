<template>
  <Layout>
    <div class="header">
      <h2>记账</h2>
      <SelectMonth
        class="selectMonth"
        @selectDate="onSelectdate"
        :month="month"
        :year="year"
      >
        <div class="select">
          <div class="year">{{ year }}年</div>
          <div>
            <span class="month">{{ month }}</span
            >月
          </div>
        </div>
      </SelectMonth>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import SelectMonth from "@com/Statistics/SelectMonth";
import moment from "moment";

export default {
  name: "Statistics",
  components: { Layout, SelectMonth },
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
.selectMonth {
  > .header {
    background: @color-background;
    .select {
      .year {
      }
      .month {
        font-size: 26px;
        font-weight: bold;
        padding: 0 4px;
      }
    }
  }
}
</style>
