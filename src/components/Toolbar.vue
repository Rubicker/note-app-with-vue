<template>
  <div id="toolbar">
    <i @click="addNote" 
        class="glyphicon glyphicon-plus">
    </i>
    <i @click="toggleFavorite"
        class="glyphicon glyphicon-star"
        :class="{starred: isActiveFavorite}">
    </i>
    <i @click="deleteNote"
        class="glyphicon glyphicon-remove">
    </i>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'isActiveFavorite'
      ])
    },
    methods: {
      ...mapActions([
        'addNote',
        'toggleFavorite',
        'deleteNote',
      ])
    }
  }
</script>