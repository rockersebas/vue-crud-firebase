<template>
  <div class="home">
    <form @submit.prevent="procesarFormulario">
    <Input :tarea = "tarea"/>
    </form>
    <br>

    <p>{{ tarea }}</p>
    
    <lista-tareas></lista-tareas>

  </div>
</template>

<script>
import Input from '../components/input.vue';
import {mapActions, mapState} from 'vuex';
import ListaTareas from '../components/listaTareas.vue';
const shortid = require('shortid');

export default {
  name: "Home",
  components: {Input, ListaTareas},
  data() {
    return {
      tarea: {
        id:  "",
        nombre: "",
        categorias: [],
        estado: '',
        numero: 0
      },
    };
  },
  methods: {
    ...mapActions(['setTareas']),
    procesarFormulario()
    {
      //console.log(this.tarea)
    if(this.tarea.nombre.trim() === ''){
        console.log('nombre Vacío')
        return
      }


      this.tarea.id = shortid.generate()
      console.log("id : " + this.tarea.id)
      this.setTareas(this.tarea)
      // Limpiar formulario
       this.tarea = {
        nombre: "",
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  computed : {
    bloquear(){
      return this.tarea.nombre.trim() === '' ? true : false
    },
    ...mapState(['cargando'])
  }
};
</script>
