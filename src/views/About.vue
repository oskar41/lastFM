<template>
  <v-carousel>
    <img src="~@/assets/credit-card.jpg" alt="credit-card"/>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import axios from 'axios'
import api from '@/api'

export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
  async created() {
    let res = await api.get()
    console.log(res)
    // axios
    //   .get(
    //     'http://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key=da90a69f6ce53e6905f8a993a8ce9679&user=joanofarctan&format=json',
    //   )
    //   .then(r => console.log(r))
  },
}
</script>
