<template>
  <div class="container">
    <virtualRecycleScroller :items="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "@vue/reactivity";
import virtualRecycleScroller from "./components/virtualRecycleScroller.vue";
import { getData } from "./data.js";
export default defineComponent({
  components: {
    virtualRecycleScroller,
  },
  setup() {
    const list = ref(getData(1000));
    return {
      list,
      getData,
    };
  },
});
</script>

<style scoped>
.container {
  height: 100%;
  border: 1px solid #ccc;
}
</style>