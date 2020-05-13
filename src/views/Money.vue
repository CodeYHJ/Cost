<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <div class="notes">
      <FormItem
        field-name="备注"
        placeholder="在这里输入备注"
        @update:value="onUpdateNotes"
      />
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
  </Layout>
</template>

<script>
import Layout from "@com/Layout.vue";
import NumberPad from "@com/Money/NumberPad.vue";
import Types from "@com/Money/Types.vue";
import FormItem from "@com/Money/FormItem.vue";
import Tags from "@com/Money/Tags.vue";
import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";
const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

export default {
  name: "Money",
  components: { Tags, FormItem, Types, NumberPad, Layout },
  data() {
    return {
      tags: tagList,
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
  }
};
</script>

<style lang="less">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
}
</style>
