<template>
  <div class="item">
    <div class="id">{{ source.id }} - {{ source.text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup() {},
};
</script>