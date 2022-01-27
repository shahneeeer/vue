<template>
  <div>
    <h2>Parent {{$store.state.name}}</h2>
    <!-- instead of wrirtng {{$store.state.name}} we can write {{ xyz }} by using mapstate in computed
    both will have same value only code is reduced 
     -->
    <i>{{ xyz }}</i>
    <!-- xyz is through mapstate in computed -->
    <button @click="newtitlenew" >change name</button>
    <h4> {{ get }} </h4>
    <h3>{{ add('12345') }}</h3>

     <button @click="hii({new:'hhhhhhhh'})" >change</button>
     <h2>{{ abc }}</h2>
 
     <Child /> 
     <Counter  firstname="neer" lastname="shah" />
     <!-- Rendering of child in parent component -->
  </div>
   
</template>

<script>
import Child from './Child.vue'
import Counter from './Counter.vue'
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: 'Parent',
  components:{
    Child,
    Counter
  },
  computed:{
// get(){
//  return this.$store.getters.hassAddd;
// hassAdd is the function in store/getters
// now this is done by mapgetters that why i have comment get function
 
// },
// add(){
// return this.$store.getters.newsecret('99');
// newsecret is the function in store/getters
// now this is done by mapgetters that why i have comment get function
// we were passing the 99 in the add function in computed but by using mapgetters we are directly passing ie add(12345) in template
//  },
 ...mapGetters({
   get:'hassAddd',
   //get is the function called in template and hasssaddd is the function called in store/getters
   add:'newsecret'
   //add is the function called in template and newsecret is the function called in store/getters
 }),
 ...mapState({
   
   xyz : (state) => state.gender,
   abc : (state) => state.how,
  
   // xyz is called in template and gender is in store/state
 }),
 ...mapActions({
   hii:'helloaction',
 
 })
   
 
  },
  methods:{
    newtitlenew(){

    //___________Directly through mutations we are commiting ____________
    // this.$store.commit('setnewname','shah') setnewname is the function in store.js 
    // this.$store.commit('setnewname',{ title:'shah'}) 
    // we have created the object as {title:'shah'} then we have to do changes in store.js in mutation as payload.title
    //     this.$store.commit({
    //       type:'setnewname',
    //       title:"shah"})
    // }
    //__________through actions/mutations/state we are commiting_________
   
    this.$store.dispatch({
      
      type:"newtitle",
      title:"changes through actions"
    })
  },
  
}
}
</script>

<style>

</style>
