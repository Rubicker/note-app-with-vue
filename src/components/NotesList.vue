<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes | Rubicker</h2>
      <div class="btn-group btn-group-justified" role="group">
         <!-- “所有”按钮 -->
        <div class="btn-group" role="group">
          <button type="button" 
                  class="btn btn-default"
                  @click="toggleShow('all')"
                  :class="{active: getShow === 'all'}">
                  ALL NOTES
          </button>
        </div>
        <!-- “最爱”按钮 -->
         <div class="btn-group" role="group">
          <button type="button" 
                  class="btn btn-default"
                  @click="toggleShow('favorite')"
                  :class="{active: getShow === 'favorite'}">
                  FAVORITE
          </button>
        </div>
      </div>
    </div>
    <!-- 内容区 -->
    <div id="container">
      <div class="list-group">
        <a v-for="note in getShowNotes"
           class="list-group-item"
           href="#"
           :class="{active: getActiveNote === note}"
           @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{ note.text.trim().substring(0, 30) }}  
          </h4>     
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'getActiveNote',
        'getAllNotes',
        'getShowNotes',
        'getShow'
      ])
    },
    methods: {
      ...mapActions([
        'updateActiveNote',
        'toggleShow'
      ])
    }
  }
  
</script>