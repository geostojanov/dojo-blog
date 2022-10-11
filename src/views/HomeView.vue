<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term - {{ search }}</p>
    <div :key='name' v-for="name in namesFiltered">{{ name }}</div>
    <button @click="handeClick">stop watching</button>
  </div>
</template>

<script>
import { ref, computed } from '@vue/reactivity'
import { watch, watchEffect } from '@vue/runtime-core'


export default {
  name: 'HomeView',
  setup() {
    
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    
    const stopWatch = watch(search, () => {
      console.log('watch functon ran.')
    })
    
    const stopEffect = watchEffect(() => {
      console.log('watchEffect function ran.')
    })
    
    const namesFiltered = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    })
    
    const handeClick = () => {
      stopWatch();
      stopEffect();
    }
    
    return { names, search, namesFiltered, handeClick }
  }
}
</script>
