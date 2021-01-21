<template>
  <div class="settings">
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            class="card"
          >
            <div class="card-body">
              <h5 class="card-title text-center">Master Folders</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </p>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Add Master Folder</span>
                <input type="file" class="form-control" id="inputGroupFile01" webkitdirectory directory multiple>
                <button class="btn btn-outline-success" type="button" id="button-addon2">Add Master Folder</button>
              </div>
              <h4>
                <span
                  class="badge badge-space bg-secondary"
                  v-for="(masterFolder, tagIndex) in masterFolders"
                  :key="tagIndex"
                >
                  {{ masterFolder.folderPath }}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div
            class="card"
          >
            <div class="card-body">
              <h5 class="card-title text-center">Master Tags</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </p>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Add Master Tag</span>
                <input type="text" class="form-control" aria-describedby="basic-addon1" v-model=newMasterTag >
                <button class="btn btn-outline-success" type="button" id="button-addon2" @click=add_master_tag >Add Master Tag</button>
              </div>
              <h4 class="text-center">
                <span
                  class="btn badge-space btn-danger"
                  type="button"
                  v-for="(masterTag, tagIndex) in masterTags"
                  :key="tagIndex"
                  @click=remove_master_tag(tagIndex)
                >
                  {{ masterTag.tagName }}
                  <i class="bi bi-x-square" style="padding-left: .5em;"></i>
                </span>
              </h4>
            </div>
          </div>
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
    filePath: String,
    masterFolders: Array,
    masterTags: Array
  },
  data() {
    return {
      newMasterTag: null
    };
  },
  methods: {
    add_master_tag() {
      this.$emit('add_master_tag', 
        this.newMasterTag
      )
      this.newMasterTag = null
    },
    remove_master_tag(tagIndex) {
      this.$emit('remove_master_tag', 
        tagIndex
      )
    }
  }
};
</script>

<style scoped>
  .row {
    margin-top: 2.5em;
  }
  .badge-space {
    margin: .25em;
  }
</style>