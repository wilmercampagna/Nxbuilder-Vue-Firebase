<template>
  <div>
    <carousel-3d class="carou" :autoplay="true" :autoplay-timeout="5000" :animationSpeed="3000"
    :controls-visible="true" :clickable="false">
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <figure>
          <img :src="slide">
          <figcaption>
            The sky is the limit only for those who aren't afraid to fly!
          </figcaption>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>

import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'Carrousel',
  data () {
    return {
      slides: [
        'https://edificioquimbaya.com/wp-content/uploads/2018/02/proyecto-de-vivienda-construccion-sostenible-1080x675.jpg',
        'https://www.cronista.com/__export/1515028627234/sites/diarioelcronista/img/2018/01/03/cc030417e003f11_crop1491215071684_crop1515028626976.jpg_258117318.jpg',
        'https://www.construar.com.ar/wp-content/uploads/2018/01/LA-CONSTRUCCI%C3%93N-SIGUE-VOLANDO-300x215.jpg',
        'https://revistasumma.com/wp-content/uploads/2015/05/Construcci%C3%B3n1.jpg',
        'https://actualicese.com/_ig/img/fotos/constructor-concepto-edifi-proyect.jpg'
      ]
    }
  },
  components: {
    Carousel3d,
    Slide
  }
}
</script>

<style lang="scss">
  .carou {
    height: 180px !important;
    max-width: 100%;
    margin: 0 !important;
  }
  .carousel-3d-container {
    margin:0;
  }
  .carousel-3d-container figcaption {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    bottom: 0;
    position: absolute;
    bottom: 0;
    padding: 30px;
    font-size: 12px;
    max-width: 100%;
    box-sizing: border-box;
  }
  .carousel-3d-slider {
    width: 240px !important;
    height: 180px !important;
  }
  .carousel-3d-slide {
    width: inherit !important;
    height: inherit !important;
  }
  figcaption {
    width: 100%;
    padding: 0 !important;
  }
  .carousel-3d-slide {
    border-radius: 5px;
  }
</style>
