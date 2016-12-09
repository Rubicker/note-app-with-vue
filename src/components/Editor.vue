<template>
  <div id="note-editor">
    <textarea 
      :value="getActiveText"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'getActiveText'
      ])
    },
    methods: {
      ...mapActions([
        'editNote'
      ])
    }
  }
</script>