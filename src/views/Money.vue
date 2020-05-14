<template>
  <Layout>
    <!-- <div class="tabBox">
      <a-tabs default-active-key="1" size="large" tabPosition="top">
        <a-tab-pane key="1" tab="支出">
          <div class="tags">
            <div class="tag" v-for="svg in svgList" :key="svg">
              <Icon class="tag" :name="svg" fontSize="30" />
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="收入">
          <div class="tags">
            <div class="tag" v-for="svg in svgList" :key="svg">
              <Icon class="tag" :name="svg" fontSize="30" />
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div> -->
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
      <div class="tags">
        <div class="tag" v-for="svg in svgList" :key="svg">
          <Icon class="tag" :name="svg" fontSize="30" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import "ant-design-vue/lib/tabs/style/css";

import Layout from "@com/Layout.vue";

// import NumberPad from "@com/Money/NumberPad.vue";
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
  components: { Layout, Icon },
  data() {
    return {
      active: true,
      tags: tagList,
      recordList: recordList,
      record: {
        tags: [],
        notes: "",
        type: "-",
        amount: 0,
      },
      svgList: [],
    };
  },
  watch: {
    onRecordListChange() {
      recordListModel.save(this.recordList);
    },
  },
  methods: {
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
    },
  },
  created() {
    const that = this;
    const timer = setInterval(() => {
      const svgList = document.querySelector("svg");
      if (svgList) {
        const nodeList = svgList.childNodes;
        const cachList = [];
        nodeList.forEach((el) => {
          if (el.id.indexOf("-app-") === -1) cachList.push(el.id);
        });
        that.svgList = cachList;
        clearInterval(timer);
      }
    }, 1000);
  },
};
</script>

<style lang="less" scoped>
@import "~@/less/helper.less";

.head {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  height: 50px;
  background: @color-highlight;
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
  > .tags {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px 30px;
    height: 500px;
    overflow: auto;
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
