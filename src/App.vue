<template>
  <div id="app">
    <!-- <Parent /> -->
    <Nav />
   <router-view></router-view> 
   
  </div>
</template>

<script>
//  import Parent from './components/Parent.vue'
import Nav from './components/Nav.vue'


export default {
  name: 'App',
  components: {
//  Parent,
 Nav

  }
}
</script>

<style>

</style>
