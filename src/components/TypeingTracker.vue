<template>
  <div class="TypeingTracker">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Entrys Left</th>
          <th scope="col">Code</th>
          <th scope="col">Dollar Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">3</th>
          <td>63</td>
          <td>$65.41</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>40</td>
          <td>$250.00</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>33</td>
          <td>$150.00</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TypeingTracker",
  props: {
    source: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>