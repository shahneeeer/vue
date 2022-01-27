<template>
<div>
    <p>{{ counter }} </p>
      <p>{{ firstname }} {{ lastname }} </p> 
      <!-- firstname and lastname is called in parent.vue -->
   <input v-model="counter"/>
    <button @click="increase">Increase</button>
    <button @click="decrease">Decrease</button>
    <button @click="reset">Reset</button>
</div>
  
</template>

<script>
export default {
name:"Counter",
props:['firstname','lastname']

,
data(){
     return {counter:0}
},
methods:{
   
    increase(){
        this.counter=this.counter+1
    },
     decrease(){
        this.counter=this.counter-1
    },
    reset(){
        this.counter=0
    }
}
}
</script>

<style>

</style>