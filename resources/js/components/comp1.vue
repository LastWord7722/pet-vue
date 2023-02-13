<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">age</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr v-for="person in personAgeMinTwentyOne">
        <th scope="row">{{ person.id}}</th>
        <td>{{ person.name}}</td>
        <td>{{ person.age}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import posts from "./posts.vue";
  export default {
    name: "comp1",

    data(){
      return{
        person: [
          {
            id:1,
            name:'mark',
            age : 21,
          },
          {
            id:2,
            name:'влада',
            age : 22,
          },
          {
            id:3,
            name:'ваня',
            age : 23,
          },
          {
            id:4,
            name:'вася',
            age : 19,
          },
        ]

      }
    },

    computed:{ // способ работы с данными из data
      job(){
        return this.name + " работа"
      },
      personAgeMoreTwentyOne(){
          return this.person.filter(function (person){
            return person.age >= 21
          })
      },

      personAgeMinTwentyOne(){
        return this.person.filter(function (person){
          return person.age < 21
        })
      },
    },


    methods:{
      sayHello(){
        document.write('hi')
      }
    },

    components : {
      posts
    }
  }
</script>

<style scoped>

</style>