<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term - {{ search }}</p>
    <div :key='name' v-for="name in namesFiltered">{{ name }}</div>
  </div>
</template>

<script>
import { ref, computed } from '@vue/reactivity'


export default {
  name: 'HomeView',
  setup() {
    
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    
    const namesFiltered = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    })
    
    return { names, search, namesFiltered }
  }
}
</script>
