<template>
  <div>
      <h2>Child</h2>
      {{$store.state.address}}
      <button @click="change()">change addrsess</button>
  </div>
</template>

<script>
export default {
name:"Child",
methods:{
    change(){
    this.$store.dispatch({
        type:'newaddress',
        address:"dombivli"
    })
    }
}
}
</script>

<style>

</style>