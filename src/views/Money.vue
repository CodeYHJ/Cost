<template>
  <Layout>
    <div class="head">
      <div class="tabBox">
        <div>
          <div class="tab" @click="onActiveLeft">
            支出
          </div>
          <div class="tab" @click="onActiveRight">
            收入
          </div>
        </div>
        <div :class="active ? 'line left' : 'line right'"></div>
      </div>
    </div>
    <div class="scroller">
      <div class="tagsLeft" v-if="active">
        <div
          :id="svg.icon"
          class="tag"
          v-for="svg in svgLeftList"
          :key="svg.icon"
          @click="handleActive(svg.icon)"
        >
          <Icon
            :class="['tagIcon', activeName === svg.icon ? 'active' : '']"
            :name="svg.icon"
            fontSize="30"
          />
          <div class="name">{{ svg.name }}</div>
        </div>
      </div>
      <div class="tagsRight" v-else>
        <div
          :id="svg.icon"
          class="tag"
          v-for="svg in svgRightList"
          :key="svg.icon"
          @click="handleActive(svg.icon)"
        >
          <Icon
            :class="['tagIcon', activeName === svg.icon ? 'active' : '']"
            :name="svg.icon"
            fontSize="30"
          />
          <div class="name">{{ svg.name }}</div>
        </div>
      </div>
    </div>
    <a-drawer
      placement="bottom"
      :closable="false"
      :visible="visible"
      @close="onClose"
      height="250"
      destroyOnClose
    >
      <NumberPad :value="inputValue" :iconName="iconName" @submit="onSubmit" />
    </a-drawer>
  </Layout>
</template>

<script>
import "ant-design-vue/lib/tabs/style/css";
import "ant-design-vue/lib/drawer/style/css";

import Layout from "@com/Layout.vue";
import NumberPad from "@com/Money/NumberPad.vue";
import Icon from "@/components/Icon.vue";
import recordListModel from "@/models/recordListModel";
import { iconIncomeConfig, setIcon, iconExpenditureConfig } from "../lib/icon";

export default {
  name: "Money",
  components: { Layout, Icon, NumberPad },
  data() {
    return {
      active: true,
      visible: false,
      svgLeftList: [],
      svgRightList: [],

      activeName: "",
      inputValue: "0",
      type: "-",
      //
      record: {
        id: "",
        tags: [],
        note: "",
        createdAt: "",
        inComeAmount: 0,
        expenditureAmount: 0
      }
    };
  },
  computed: {
    iconName() {
      return this.activeName === "" ? "" : iconIncomeConfig[this.activeName];
    }
  },
  methods: {
    handleActive(name) {
      if (!this.visible) this.showDrawer();
      if (this.activeName === name) {
        this.activeName = "";
      } else {
        this.activeName = name;
      }
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
      this.activeName = "";
      this.inputValue = "0";
    },
    onActiveLeft() {
      Object.assign(this, { active: true, type: "-" });
    },
    onActiveRight() {
      Object.assign(this, { active: false, type: "+" });
    },
    onSubmit(e) {
      if (e === 0) return;
      const record2 = {
        id: new Date().getTime(),
        createdAt: new Date(),
        svg: this.activeName,
        amount: e,
        type: this.type,
        note:
          this.type === "-"
            ? iconExpenditureConfig[this.activeName]
            : iconIncomeConfig[this.activeName]
      };
      recordListModel.save(record2, this.type);
      this.$router.push("/");
    }
  },
  created() {
    const { expenditureList, incomeList } = setIcon();
    this.svgLeftList = expenditureList;
    this.svgRightList = incomeList;
  }
};
</script>

<style lang="less">
@import "~@/less/helper.less";
.ant-drawer-body {
  padding: 0 !important;
}
.head {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  width: 100%;
  height: 50px;
  background: @color-highlight;
  position: fixed;
  top: 0;
  left: 0;
  .tabBox {
    display: inline-block;
    position: relative;
    text-align: center;
    .tab {
      font-size: 20px;
      width: 50px;
      text-align: center;
      display: inline-block;
      padding-bottom: 20px;
      margin: 0 20px;
    }
    > .line {
      width: 50px;
      height: 2px;
      background: #000000;
      position: absolute;
      bottom: 0;
      left: 0;
      transform-origin: 0 0;
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    > .left {
      transform: translate3d(20px, 0px, 0px);
    }
    > .right {
      transform: translate3d(110px, 0px, 0px);
    }
  }
}
.scroller {
  flex: 1;
  padding: 60px 10px;
  > .tagsLeft,
  .tagsRight {
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
    height: 450px;
    overflow: auto;
    > .tag {
      width: 100px;
      height: 100px;
      margin: 20px 8px;
      .col_layout();
      align-items: center;
      .tagIcon {
        padding: 10px;
        background: #efefef;
        border-radius: 50%;
      }
      > .active {
        background: @color-highlight !important;
      }
      .name {
        font-size: 12px;
        padding: 2px;
        text-align: center;
      }
    }
  }
}
</style>
