import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 需要管理的状态：笔记和当前显示笔记
const state = {
  notes: [],
  activeNote: [],
  show: 'all'
}

const mutations = {
  TOGGLE_SHOW(state, show){
    state.show = show
  },
  //新增笔记
  ADD_NOTE(state){
    const newNote = {
      text: '新笔记',
      favorite: false
    };
    state.notes.push(newNote);
    state.activeNote = newNote;
  },

  //修改笔记
  EDIT_NOTE(state, text){
    state.activeNote.text = text;
  },

  //删除笔记
  DELETE_NOTE(state){
    for(let i = 0,len = state.notes.length; i< len; i++){
      if(state.notes[i] === state.activeNote){
        state.notes.splice(i, 1);
      }
    }
    state.activeNote = state.notes[0] || {};
  },

  //切换笔记的收藏与取消收藏
  TOGGLE_FAVORITE(state){
    state.activeNote.favorite = !state.activeNote.favorite;
  },

  //设置当前激活的的笔记
  SET_ACTIVE_NOTE(state, note){
    state.activeNote = note;
  }
}

const actions = {
  addNote: ({ commit }) => {
    commit('ADD_NOTE');
  },

  toggleShow: ({ commit },show) => {
    commit('TOGGLE_SHOW', show);
  },

  updateActiveNote : ({ commit }, note) =>{
    commit('SET_ACTIVE_NOTE', note)
  },

  deleteNote : ({ commit }) => {
    commit('DELETE_NOTE')
  },

  toggleFavorite : ({ commit }) => {
    commit('TOGGLE_FAVORITE')
  },

  editNote : ({ commit }, e) => {
    commit('EDIT_NOTE', e.target.value)
  }
}

const getters = {
  getAllNotes: state => {
    return state.notes
  },
  getActiveNote: state => {
    return state.activeNote
  },
  isActiveFavorite: (state,getters) => {
    return getters.getActiveNote.favorite;
  },
  getActiveText: state => {
    return state.activeNote.text;
  },
  getShowNotes: state => {
    if(state.show === 'all'){
      return state.notes;
    }else if(state.show === 'favorite'){
      return state.notes.filter(notes => notes.favorite) || {};
    }
  },
  getShow: state => {
    return state.show
  }
}

export default new Vuex.Store({
  getters,
  actions,
  state,
  mutations
})