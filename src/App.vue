<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
  import toolbar from './components/Toolbar'
  import notesList from './components/NotesList'
  import editor from './components/Editor'

  export default {
    name: 'app',
    components: {
      toolbar,
      notesList,
      editor
    }
  }
</script>