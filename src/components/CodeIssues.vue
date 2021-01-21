<template>
    <div id="CodeIssues">
        <p>Maiandrios ran into {{ counter }} issues.</p>
        <button v-on:click=add_count>Add 1</button>
    </div>
</template>

<script>
export default {
  name: "CodeIssues",
  props: {
    
  },
  data() {
      return {
        counter: 0,
      }
  },
  methods: {
      add_count() {
        this.counter = this.counter + 1
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>