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
        'http://www.homecenter.com.co/static/categorias/vitrina/n2/construccion/vtn-cat-Hierro.jpg',
        'http://www.homecenter.com.co/static/categorias/vitrina/n2/construccion/vtn-cat-MaderasTableros1.jpg',
        'https://www.argos.co/Media/Default/images/productos/Cemento.jpg',
        'https://www.argos.co/Media/Default/images/productos/Planta-de-concreto.jpg',
        'http://www.homecenter.com.co/static/categorias/vitrina/n3/2018/marzo/vitXO/cat1420004.jpg',
        'http://www.homecenter.com.co/static/categorias/vitrina/n2/construccion/vtn-cat-MaderasTableros1.jpg',
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
