<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ ninjaOne.name }} and my age is {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity'


export default {
  name: 'HomeView',
  setup() {
    
    const ninjaOne = ref({ name: 'mario', age: 30 })
    const ninjaTwo = reactive({ name: 'george', age: 30 })
    
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    }
    
    const updateNinjaTwo = () => {
      ninjaTwo.age = 40;
    }
    
    return { ninjaOne, ninjaTwo, updateNinjaOne, updateNinjaTwo }
  }
}
</script>
