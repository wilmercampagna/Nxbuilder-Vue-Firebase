<template>
  <div class="fondo">
    <!-- <py-header></py-header> -->
    <landing-body class="spac">
      <template slot="panel">
        <py-panel></py-panel>
      </template>
      <template slot="carousel">
        <py-carrousel></py-carrousel>
      </template>
      <template slot="process">
        <py-tprocess></py-tprocess>
      </template>
      <template slot="announces">
        <py-announces></py-announces>
      </template>
    </landing-body>
  </div>
</template>

<script>

import PyHeader from '@/components/layouts/Header'
import LandingBody from '@/components/utilities/Landingbody'
import PyPanel from '@/components/utilities/Panel'
import PyCarrousel from '@/components/utilities/Carrousel'
import PyTprocess from '@/components/utilities/Tprocess'
import PyAnnounces from '@/components/utilities/Announces'

export default {
  name: 'Home',
  components: { PyHeader, LandingBody, PyPanel, PyCarrousel, PyTprocess, PyAnnounces }
}
</script>

<style lang="scss" scoped>
  .spac {
    padding-top: 70px;
  }
  .fondo {
    background-color: #E2E8EC;
  }
</style>
