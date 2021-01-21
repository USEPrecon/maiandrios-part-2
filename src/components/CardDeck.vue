<template>
  <div class="CardDeck">
    <div class="container">
      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
        <div class="col" v-for="(card, cardIndex) in cards" :key=card>
          <Card :cardIndex=cardIndex :name=card.name :tags=card.tags :filePath=card.filePath :masterTags=masterTags @add_tag=add_tag @remove_tag=remove_tag />
        </div>
      </div>
    </div>
  </div>
    
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'CardDeck',
  components: {
    Card
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
