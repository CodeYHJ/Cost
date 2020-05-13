<template>
  <div class="selectMonth">
    <a-month-picker
      placeholder="Select Time"
      @change="onChange"
      :value="handleDate"
    >
      <slot />
    </a-month-picker>
  </div>
</template>

<script>
import "ant-design-vue/lib/date-picker/style/css";
import "moment/locale/zh-cn";
import moment from "moment";

export default {
  name: "selectMonth",
  props: ["month", "year"],
  data() {
    return {};
  },
  computed: {
    handleDate() {
      return moment()
        .year(this.year)
        .month(this.month);
    }
  },
  methods: {
    onChange(dates) {
      const year = dates.year();
      const month = dates.month();
      this.$emit("selectDate", { month, year });
    }
  }
};
</script>
<style lang="less" scoped></style>
