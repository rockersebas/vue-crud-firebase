<template>
  <h2>ID Tarea : {{ $route.params.id }} </h2>
  <br>
  tarea : {{tarea}}

  <form @submit.prevent="updateTarea(tarea)">
 <Input :tarea = "tarea"/>
 </form>
<router-link to="/" class="btn btn-success btn-block mt-2">Volver</router-link>

</template>

<script>
import {mapActions, mapState} from 'vuex';
import Input from '../components/input.vue';

export default {
  components: { Input },
    computed: {
        ...mapState(['tarea'])
    },
methods: {
    ...mapActions(['getTarea', 'updateTarea'])
},
created() {
    this.getTarea(this.$route.params.id)
},

}
</script>

