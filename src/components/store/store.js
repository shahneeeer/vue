import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
 state:{
     name:"neer",
     address:"kopar",
     secretkey:1234,
     gender:"male",
     how:'are you',
 },
 mutations:{
     setnewname(state,payload){
        state.name=""+payload.title
        // state.name=""+payload.title
        //state.name is from state 
        //payload.title :title is the object in parent
     },
     address( state,payload){
        state.address=""+payload.address
     },
     hellohow(state,payload){
        state.how=""+payload.new
     }
 },
 actions:{
     newtitle(context,payload){
        context.commit('setnewname',payload)
        //setnewname is used in mutations
     },
     newaddress(context,payload){
        context.commit('address',payload)
     },
     helloaction(context,payload){
        context.commit('hellohow',payload)
     }
 },
 getters:{
     hassAdd(state){
       return state.secretkey
       //hassadd is used in parent.vue in computed
     },
     hassAddd(state,getters){
        return state.name+"--$$$$"+getters.hassAdd;
        // By using getters in hassAddd we are combining both function of getters
      },
      newsecret:(state)=>(data)=>{
          return state.secretkey+"--"+data
      }
        
      
 }
 
})