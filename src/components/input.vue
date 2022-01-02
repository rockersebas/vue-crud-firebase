<template>
    <input
        type="text"
        class="form-control my-2"
        placeholder="Ingresar Nombre"
        v-model.trim="tarea.nombre"
      />
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="cat1"
          value="Java Script"
          v-model="tarea.categorias"
        />
        <label class="form-check-label" for="cat1">JavaScript</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="cat2"
          value="Node JS"
          v-model="tarea.categorias"
        />
        <label class="form-check-label" for="cat2">Node JS</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="cat3"
          value="Spring Boot"
          v-model="tarea.categorias"
        />
        <label class="form-check-label" for="cat3">Spring Boot</label>
      </div>
<br>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="check-1"
          id="check-1"
          value="Urgente"
          v-model="tarea.estado"
        />
        <label class="form-check-label" for="check-1">Urgente</label>
      </div>
       <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="check-2"
          id="check-2"
          value="Relax"
          v-model="tarea.estado"
        />
        <label class="form-check-label" for="check-2">Relax</label>
      </div>
      <input type="number" name="" id="" class="form-control" v-model.number="tarea.numero">
      <button type="submit" 
      
      class="btn btn-dark mt-2 btn-block">Procesar</button>
</template>

<script>
export default {
props : {
    tarea : Object
}
}
</script>
