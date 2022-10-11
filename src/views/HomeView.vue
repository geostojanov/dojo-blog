<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts"/>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from '@vue/reactivity'


export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    
    const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequatur iure pariatur obcaecati nobis cupiditate repellendus, laboriosam voluptates aliquam doloribus consectetur voluptas, atque nisi necessitatibus quidem ullam alias labore possimus quisquam illum placeat sint? Repudiandae unde vero culpa molestiae quidem odit, iusto assumenda quis nobis quas cum ea? Maiores quae inventore placeat rerum eligendi accusamus nobis sequi distinctio consequatur et deleniti provident, officia vel, adipisci eaque eveniet! Nulla itaque asperiores, voluptates rem quos dolores reprehenderit fugiat nesciunt ea, molestias porro maiores ut sed ducimus sapiente iusto natus modi odit cupiditate eaque quisquam iure doloribus distinctio laborum. Maxime nemo rem provident?', id: 1 },
      { title: 'top 5 CSS tips', body: 'lorem ipsum', id: 2 },
    ])
    
    return { posts }
  }
}
</script>