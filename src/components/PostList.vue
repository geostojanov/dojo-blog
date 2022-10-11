<template>
  <div class="post-list">
    <div :key="post.id" v-for="post in posts">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'
export default {
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    
    onMounted(() => console.log('component mounted.'))
    onUnmounted(() => console.log('component unmonuted.'))
    onUpdated(() => console.log('component updated.'))
    
  }
}
</script>

<style>

</style>