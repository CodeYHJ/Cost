<template>
  <div class="numberPad">
    <div class="output">
      <span class="remarks">备注： {{ iconName }}</span>
      <span class="num">{{ output }}</span>
    </div>
    <div class="buttons">
      <div @click="inputContent">1</div>
      <div @click="inputContent">2</div>
      <div @click="inputContent">3</div>
      <div @click="remove">删除</div>
      <div @click="inputContent">4</div>
      <div @click="inputContent">5</div>
      <div @click="inputContent">6</div>
      <div @click="clear">清空</div>
      <div @click="inputContent">7</div>
      <div @click="inputContent">8</div>
      <div @click="inputContent">9</div>
      <div @click="ok" class="ok">OK</div>
      <div @click="inputContent" class="zero">0</div>
      <div @click="inputContent">.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberPad",
  props: ["value", "iconName"],
  data() {
    return {
      output: this.value.toString()
    };
  },
  methods: {
    inputContent(event) {
      const button = event.target;
      const input = button.textContent;
      if (this.output.length === 16) {
        return;
      }
      if (this.output === "0") {
        if ("0123456789".indexOf(input) >= 0) {
          this.output = input;
        } else {
          this.output += input;
        }
        return;
      }

      if (this.output.indexOf(".") >= 0) {
        if (input === ".") return;
        if (this.output.split(".")[1].toString().length > 1) return;
      }
      this.output += input;
    },
    remove() {
      if (this.output.length === 1) {
        this.output = "0";
      } else {
        this.output = this.output.slice(0, -1);
      }
    },
    clear() {
      this.output = "0";
    },
    ok() {
      // this.$emit("update:value", this.output);
      this.$emit("submit", this.output);
      this.output = "0";
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/less/helper.less";

.numberPad {
  background: @color-highlight;
  height: 250px;
  .output {
    .row_layout();
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    font-family: Consolas, monospace;
    padding: 0 16px;
    text-align: right;
    height: 50px;
    > .remarks {
      width: 80px;
      font-size: 14px;
    }
    > .num {
      flex: 1;
      padding-left: 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .buttons {
    .row_layout();
    flex-wrap: wrap;
    > div {
      width: 25%;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }

    & .zero {
      width: 25 * 3%;
    }
  }
}
</style>
