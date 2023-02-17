<template>
  <div>
    <create-component></create-component>
    <index-component></index-component>
  </div>
</template>

<script>
import createComponent from "./createComponent.vue";
import indexComponent from "./index.component.vue";
export default {
  name: "person",

  data(){
    return{
      persons : null
    }
  },


  components: {
    createComponent,
    indexComponent,
  }

}
</script>

<style scoped>

</style>