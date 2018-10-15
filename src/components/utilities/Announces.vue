<template>
  <div class="">
    <div class="columns facol">
      <div>
        <vertical-carousel>
            <img class="brd" v-for="(item, index) in slides" :key="index" :src="item" alt="">
        </vertical-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalCarousel from '@/components/utilities/landing/VerticalCarousel'
export default {
  data () {
    return {
      slides: [
        'https://images.pexels.com/photos/396303/pexels-photo-396303.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        'https://www.argos.co/Media/Default/images/productos/Cemento.jpg',
        'https://www.argos.co/Media/Default/images/productos/Planta-de-concreto.jpg',
        'https://images.pexels.com/photos/457937/pexels-photo-457937.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        'https://www.argos.co/Media/Default/images/productos/Cemento.jpg'
      ]
    }
  },
  components: {VerticalCarousel}
}
</script>

<style lang="scss" scoped>
  .facol {
    background-color: #f1f4f6;
    height: 100vh;
    padding: 10px;
    margin-left: 5px;
  }
  .brd {
    border-radius: 10px;
  }
</style>
