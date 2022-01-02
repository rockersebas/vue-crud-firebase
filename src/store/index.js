import { createStore } from 'vuex'
import router from '../router/index'
export default createStore({
  state: {
    tareas : [],
    tarea: {
      id:  "",
      nombre: "",
      categorias: [],
      estado: '',
      numero: 0
    },
    cargando : false,
  },
  mutations: {

cargar(state, payload){
  
  state.tareas = payload
  
}

    ,set(state, payload){
      console.log(payload)
      state.tareas.push(payload)
      console.log(state.tareas)

    },
    delete(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)

      alert('Registro eliminado')
    },
    findTarea(state, payload){
      if(!state.tareas.find(item => item.id === payload)){
        alert('ID no encontrado')
       router.push('/')
       return
      }
      state.tarea = state.tareas.find(item => item.id === payload)
    },
    update(state, payload)
    {

      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)

      alert('Registro Editado')
      router.push('/')
    }
  },
  actions: {

     async cargarLocalStorage({commit}){
      
      try{

        const resp = await fetch("https://api-vue-bc7fd-default-rtdb.firebaseio.com/tareas-api.json",{
          method : 'GET'
        })
        const DBResp = await resp.json()
        const arrayTareas = []
        for(let id in DBResp)
        {
          arrayTareas.push(DBResp[id])
        }
        commit('cargar', arrayTareas)
        

      }catch(error)
      {
        console.log(error)
      }

    },
     async setTareas({commit}, tarea){
       try{
      const resp = await fetch(`https://api-vue-bc7fd-default-rtdb.firebaseio.com/tareas-api/${tarea.id}.json`,{
        method : 'PUT',
        headers : {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(tarea)
      })

      const DBresult = await resp.json()
      console.log(DBresult)
      commit('set', tarea)
    }catch (error){
      console.log(error)
    }
    },
    async deleteTarea({commit}, id){
      try {
        const resp = await fetch(`https://api-vue-bc7fd-default-rtdb.firebaseio.com/tareas-api/${id}.json`,
        {
          method : 'DELETE'
        })
        commit('delete', id)

      } catch (error) {
        console.log(error)
      }
    },
    getTarea({commit}, id){
      commit('findTarea', id)
    },
    async updateTarea({commit}, tarea){
      try{
        const resp =  await fetch(`https://api-vue-bc7fd-default-rtdb.firebaseio.com/tareas-api/${tarea.id}.json`,
        {
          method : 'PATCH',
          body :  JSON.stringify(tarea)
        })
        const DBresp = await resp.json()
       
      }catch(error){
        console.log(error)
      }
      commit('update', tarea)
      
    }
  },
  modules: {
  }
})
