<template>
  <div>
    <create-component ref="create"></create-component>
    <index-component ref="index"></index-component>

  </div>
</template>

<script>
import createComponent from "./createComponent.vue";
import indexComponent from "./indexComponent.vue";
export default {
  name: "person",

  data(){
    return{
      persons : null
    }
  },

  mounted() {
  },


  components: {
    createComponent,
    indexComponent,
  }

}
</script>

<style scoped>

</style>