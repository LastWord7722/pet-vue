<template>

</template>

<script>
import axios from "axios";

export default {
  name: "valuta",

  data(){
    return{
      valuta : []
    }
  },

  mounted () {
    axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11')
    .then(response => this.valuta = response.data)
  },


}
</script>

<style scoped>

</style>