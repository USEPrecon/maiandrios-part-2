<template>
    <div class="IFrame">
        <iframe :src=source id="info" class="iframe" name="info" seamless="" height="800em" width="100%"></iframe>
    </div>
</template>

<script>
export default {
  name: "IFrame",
  props: {
    source: String,
    },
    data() {
        return {
        }
    },
    methods: {
        findElements() {
            alert("BOOP")
        },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
