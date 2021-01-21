<template>
  <div class="Card">
    <div
      class="card"
      type="button"
      data-bs-toggle="modal"
      :data-bs-target="'#exampleModal' + cardIndex"
    >
      <img :src="'local-resource://' + filePath" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title text-center">{{ name }}</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <h4>
          <span
            class="badge badge-space bg-secondary"
            v-for="(tag, tagIndex) in tags"
            :key="tagIndex"
          >
            {{ tag }}
          </span>
        </h4>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'exampleModal' + cardIndex"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <img :src="'local-resource://' + filePath" class="card-img-top" />
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ name }}</h5>
          </div>
          <div class="modal-body">
            <select class="form-select" aria-label="Default select example" :id="'selectedTag' + cardIndex" >
              <option v-for="(masterTag, tagIndex) in masterTags" :key="tagIndex">{{ masterTag.tagName }}</option>
            </select>
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="button" @click=add_tag >Add Tag</button>
            </div>
            <h4>
              <span
                class="btn badge-space btn-danger"
                type="button"
                v-for="(tag, tagIndex) in tags"
                :key="tagIndex"
                @click=remove_tag(tagIndex)
              >
                {{ tag }}
                <i class="bi bi-x-square" style="padding-left: .5em;"></i>
              </span>
            </h4>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDeck",
  components: {},
  props: {
    name: String,
    tags: Array,
    cardIndex: Number,
    filePath: String,
    masterTags: Array
  },
  data() {
    return {
      selectedTag: "test"
    };
  },
  methods: {
    add_tag() {
      this.$emit('add_tag', 
        document.getElementById("selectedTag" + this.cardIndex).value,
        this.cardIndex
      )
    },
    remove_tag(tagIndex) {
      this.$emit('remove_tag',
        tagIndex,
        this.cardIndex
      )
    }
  }
};
</script>

<style scoped>
.badge-space {
  margin: 0.25em;
}
</style>