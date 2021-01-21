<template>
  <div class="DataSubmission">
    <div class="container">
      <div class="row">
        <div class="col">
          <IFrame source="https://getbootstrap.com/"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IFrame from "@/components/IFrame.vue";


export default {
    components: {
        IFrame,
    }

}
</script>

<style scoped>

    .container {
        margin-top: 4em;
    }

</style>
