<template>
  <Layout class-prefix="layout">
    <!-- <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <div class="notes">
      <FormItem
        field-name="备注"
        placeholder="在这里输入备注"
        @update:value="onUpdateNotes"
      />
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" /> -->
    <div class="tabBox">
      <a-tabs
        default-active-key="2"
        size="large"
        tabPosition="top"
        :animated="false"
      >
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
      tags: tagList,
      recordList: recordList,
      record: {
        tags: [],
        notes: "",
        type: "-",
        amount: 0
      },
      svgList: []
    };
  },
  watch: {
    onRecordListChange() {
      recordListModel.save(this.recordList);
    }
  },
  methods: {
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
.layout-content {
  display: flex;
  flex-direction: column;
}
.ant-tabs-content {
}
.tabBox {
  text-align: center;
}
.tags {
  background: white;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 30px;
  height: 430px;
  // overflow: auto;

  > .tag {
    min-height: 44px;
    padding: 10px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #efefef;
  }
}
</style>
