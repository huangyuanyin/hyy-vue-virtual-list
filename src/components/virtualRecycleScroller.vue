<template>
  <RecycleScroller
    class="scroller"
    :items="items"
    :item-size="50"
    key-field="id"
    v-slot="{ item }"
  >
    <Item :source="item"/>
  </RecycleScroller>
  <!-- items: 需要渲染的列表，itemSize: 列表项的高度，keyField: 列表循环的key值 -->
</template>

<script>
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import Item from './Item.vue'
export default {
  components: {
    RecycleScroller,
    Item
  },
  props: {
    items: Array
  }
}
</script>

<style scoped>
.scroller {
  height: 100%;
}
</style>