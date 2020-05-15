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
      <div
        ref="tags"
        class="tags"
        :style="visible ? 'height:calc(100% - 300px)' : ''"
      >
        <div
          :id="svg"
          :class="['tag', activeName === svg ? 'active' : '']"
          v-for="svg in svgList"
          :key="svg"
          @click="handleActive(svg)"
        >
          <Icon class="tag" :name="svg" fontSize="30" />
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
      <NumberPad :value="inputValue" />
    </a-drawer>
  </Layout>
</template>

<script>
import "ant-design-vue/lib/tabs/style/css";
import "ant-design-vue/lib/drawer/style/css";

import Layout from "@com/Layout.vue";

import NumberPad from "@com/Money/NumberPad.vue";
// import Types from "@com/Money/Types.vue";
// import FormItem from "@com/Money/FormItem.vue";
// import Tags from "@com/Money/Tags.vue";
import Icon from "@/components/Icon.vue";
import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";
const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

export default {
  name: "Money",
  // components: { Tags, FormItem, Types, NumberPad, Layout },
  components: { Layout, Icon, NumberPad },
  data() {
    return {
      active: true,
      tags: tagList,
      visible: false,
      svgList: [],
      activeName: "",
      inputValue: "0",
      //
      recordList: recordList,
      record: {
        tags: [],
        notes: "",
        type: "-",
        amount: 0
      }
    };
  },
  watch: {
    onRecordListChange() {
      recordListModel.save(this.recordList);
    }
  },
  methods: {
    handleActive(name) {
      if (!this.visible) this.showDrawer();
      if (this.activeName === name) {
        this.activeName = "";
      } else {
        this.activeName = name;
        console.log(document.querySelector(`#${name}`).getBoundingClientRect());

        setTimeout(() => {
          console.log(
            document.querySelector(`#${name}`).id,
            document.querySelector(`#${name}`).getBoundingClientRect()
          );
        }, 2000);
        // this.$refs.tags.scrollTo();
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
      this.active = true;
    },
    onActiveRight() {
      this.active = false;
    },
    onUpdateTags(value) {
      this.record.tags = value;
    },
    onUpdateNotes(value) {
      this.record.notes = value;
    },
    saveRecord() {
      const record2 = recordListModel.clone(this.record);
      record2.createdAt = new Date();
      this.recordList.push(record2);
    }
  },
  created() {
    const that = this;
    const timer = setInterval(() => {
      const svgList = document.querySelector("svg");
      if (svgList) {
        const nodeList = svgList.childNodes;
        const cachList = [];
        nodeList.forEach(el => {
          if (el.id.indexOf("-app-") === -1) cachList.push(el.id);
        });
        that.svgList = cachList;
        clearInterval(timer);
      }
    }, 1000);
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
  display: flex;
  flex-direction: row;
  transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  will-change: margin-left;
  padding: 60px 0;
  > .tags {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 30px;
    height: 500px;
    overflow: auto;
    > .active {
      background: @color-highlight !important;
    }
    > .tag {
      padding: 10px;
      margin: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #efefef;
    }
  }
}
</style>
