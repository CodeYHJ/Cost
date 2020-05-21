<template>
  <Layout>
    <div class="tags">
      <div class="tag" v-for="svg in svgList" :key="svg">
        <Icon class="tag" :name="svg" fontSize="30" />
      </div>
    </div>
  </Layout>
</template>

<script>
// import tagListModel from "@/models/tagListModel";
// import Button from "@/components/Button.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";

// tagListModel.fetch();
export default {
  name: "Labels",
  components: { Layout, Icon },
  data: () => {
    return {
      svgList: []
    };
  },
  methods: {
    createTag() {}
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

<style lang="less" scoped>
.tags {
  flex: 1;
  background: white;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 30px;
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
