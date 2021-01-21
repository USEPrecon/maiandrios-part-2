<template>
  <div class="home">
    <div class="container">
      <CardDeck :cards=cards :masterTags=masterTags @add_tag=add_tag @remove_tag=remove_tag />
    </div>
  </div>
    
</template>

<script>
import CardDeck from '@/components/CardDeck.vue'

export default {
  name: 'Home',
  components: {
    CardDeck
  },
  props: {
    cards: Object,
    masterTags: Array
  },
  data() {
    return {
    }
  },
  methods: {
    add_tag(newTag, cardIndex) {
      this.$emit('add_tag', 
        newTag,
        cardIndex
      )
    },
    remove_tag(tagIndex, cardIndex) {
      this.$emit('remove_tag', 
        tagIndex,
        cardIndex
      )
    }
  }
}
</script>

<style scoped>
  .container {
    margin-top: 2.5em;
    margin-bottom: 5em;
  }
</style>
