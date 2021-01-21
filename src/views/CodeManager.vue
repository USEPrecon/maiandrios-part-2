<template>
  <div class="CodeManager">
    <div class="container">
        <div class="row">
            <div class="col-3">
                <BarButton />
            </div>
            <div class="col-9">
                <DisplayCarrierCodeTable />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import BarButton from "@/components/BarButton.vue";
import DisplayCarrierCodeTable from "@/components/DisplayCarrierCodeTable.vue";

export default {
    components: {
        BarButton,
        DisplayCarrierCodeTable,
    }

}
</script>

<style scoped>

    .container {
        margin-top: 4em;
        margin-left: .25em;
    }

</style>