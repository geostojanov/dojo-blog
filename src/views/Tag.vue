<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="tagPosts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core'

export default {
  components: { Spinner, PostList },
  setup() {
    const router = useRoute();
    
    const { posts, error, load } = getPosts()
    load()
    
    const tagPosts = computed(() => {
      return posts.value.filter(post => post.tags.includes(router.params.tag))
    })
    
    return { posts, error, tagPosts }
    
  }  
}
</script>

<style>

</style>