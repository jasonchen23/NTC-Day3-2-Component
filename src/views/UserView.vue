<template>
    {{$store.getters.fullTitle}}
  <h1> User Id is {{$route.params.userId}} </h1>
  <div>Name: {{userInfo.name}}</div> 
  <div>Email: {{userInfo.email}}</div> 
  <hr>
  <router-link :to="`/users/${userId}/todos`">{{userInfo.name}}
  </router-link>
  <router-view></router-view>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            userInfo: {}
        }
    },
    computed:{
        userId() {
            return this.$route.params.userId
        },
        stateMessage() {
            return this.$store.state.message
        }
    },
    watch:{   
        userId: function(val) {
                this.fetchUserInfo(val)
            }
    },
    mounted(){
        this.fetchUserInfo(this.userId)
    },
    methods: {
      fetchUserInfo(id){
          axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then(response => this.userInfo = response.data)
      }
  },
}
</script>