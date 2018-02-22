<template>
  <div class="page-city-section">
    <div class="page-city-section__title">
      <div class="grid-container">
      <span class="page-city-section__title-header">Who we are</span>
      <p class="page-city-section__title-text">{{ text }}</p>
      </div>
      <img src="~assets/img/city.png" class="page-city-section__title-image">
    </div>
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="cell small-12 medium-5">
          <div class="page-city-section__text-section">
            <img src="~assets/img/tectonic.svg" alt="#" class="page-city-section__text-section-tectonic-icon">
            <div class="page-city-section__text-section page-city-section__text-section--heading">Tectonic Interactive</div>
            <div class="page-city-section__text-section page-city-section__text-section--small">{{ text2 }}</div>
            <div class="page-city-section__text-section page-city-section__text-section--bold">{{ text3 }}</div>
            <div class="page-city-section__text-section page-city-section__text-section--small">{{ text4 }}</div>
          </div>
        </div>
        <div class="cell auto"></div>
        <div class="cell small-12 medium-5">
          <div class="page-city-section__text-section">
            <img src="~assets/img/neonbox.svg" class="page-city-section__text-section-neonbox-icon">
            <div class="page-city-section__text-section page-city-section__text-section--heading">Neonbox</div>
            <div class="page-city-section__text-section page-city-section__text-section--small">{{ text5 }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./page-city-section.js">
  
</script>

<style src="./page-city-section.scss" lang="scss">
  
</style>

