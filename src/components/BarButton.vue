<template>
    <div class="BarButton">
        <div class="btn-group-vertical btn-group-toggle" data-toggle="buttons">
            <div class="d-grid gap-2">
                <label class="btn btn-info btn-lg text-start">
                    <input type="radio" name="options" id="option1" checked /> RoadRunner Temp
                </label>
                <label class="btn btn-primary btn-lg text-start">
                    <input type="radio" name="options" id="option2" /> Henderson
                </label>
                <label class="btn btn-danger btn-lg text-start">
                    <input type="radio" name="options" id="option3" /> Kenan
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "BarButton",
  props: {
    source: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
