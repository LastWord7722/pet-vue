<template>
  <div>
    <div class="input-group input-group-sm m-lg-3 d-flex flex-column col-6 w-25">
      <div class="d-flex flex-row">
        <span class="input-group-text" >Name</span>
        <input type="text" v-model="name" placeholder="Name" class="form-control col-5">
      </div>

      <div class="d-flex flex-row mt-3 w-25">
        <span class="input-group-text ">Age</span>
        <input type="number" v-model="age" placeholder="Age" class="form-control col-5" >
       </div>

      <button @click.prevent="addPeople()" class="m-lg-3 col-3 btn btn-primary">Добавить</button>
    </div>
  </div>
</template>

<script>
import router from "../../router.js";
export default {

  name: "CreateComponent",

  data(){
    return{
      name:null,
      age:null,
    }
  },

  methods:{
    addPeople(){
      axios.post('/public/api/person/store',{name: this.name, age: this.age})
          .then(res => {
            let comingIndex=confirm('Успешно добавлен человек с \n Name: ' +this.name +'\n '+'Age: '+ this.age + "\n Перейти к списку персон?")
            if (comingIndex){
              router.push({name : 'person.index'})
            }else {
              this.name = null
              this.age = null
            }
          })
    }
  }

}
</script>

