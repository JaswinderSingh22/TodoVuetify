import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface State{
  
  TASK_ARR:string[];
}

export default new Vuex.Store<State>({
  state: {
    TASK_ARR:[],
  },

  getters:{
    COUNT_TASKS: state=>{
      return state.TASK_ARR.length
    }
  },

  mutations: {
    ADD_TASK(state, payload:string){
      state.TASK_ARR.push(payload)
    },
    REMOVE_TASK(state,payload){
      state.TASK_ARR.splice(payload,1)
    },
    REMOVE_ALL(state){
      state.TASK_ARR=[]
    },

    UPDATE_TASK(state, payload:any) {
      console.log(payload)
      state.TASK_ARR[payload.id]= payload.todo
    },

    
  },
  actions: {
    add_task({commit},payload:string){
      commit('ADD_TASK',payload)
    },
    remove_task({commit},payload:string){
      commit('REMOVE_TASK',payload)
    },
    remove_all({commit}){
      commit('REMOVE_ALL')
    },
    edit_Task({ commit }, payload:string) {
      commit('EDIT_TASK', payload)
    },
    update_task({commit},payload:any){
      commit('UPDATE_TASK',payload)
    }
    
  },
  modules: {
  }
})
