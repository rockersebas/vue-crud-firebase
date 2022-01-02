<template>
<nav-bar></nav-bar>
<div class="container">
 <router-view/>
</div>
 
</template>

<script>
import navBar from '../src/components/navBar.vue'
import {mapActions} from 'vuex'
export default {
  components: { navBar },
  methods: {
    ...mapActions(['cargarLocalStorage'])
  },
  created() {
    this.cargarLocalStorage()
  },
}
</script>
