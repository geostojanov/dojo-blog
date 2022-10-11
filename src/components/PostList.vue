<template>
  <div class="post-list">
    <div :key="post.id" v-for="post in posts">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
export default {
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    console.log(props.posts)
  }
}
</script>

<style>

</style>