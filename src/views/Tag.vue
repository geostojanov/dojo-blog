<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="tagPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core'

export default {
  components: { Spinner, TagCloud, PostList },
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
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>