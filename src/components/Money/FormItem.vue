<template>
  <div>
    <label class="formItem">
      <span class="name">{{ this.fieldName }}</span>
      <input
        type="text"
        :value="value"
        @input="onValueChanged($event.target.value)"
        :placeholder="this.placeholder"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "FromItem",
  props: {
    value: { type: String, default: "" },
    fieldName: { type: String, default: "" },
    placeholder: String
  },
  // watch: {
  //   value() {
  //     this.onValueChanged(this.value);
  //   }
  // },
  methods: {
    onValueChanged(value) {
      this.$emit("update:value", value);
    }
  }
};
</script>

<style lang="less" scoped>
.formItem {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>
