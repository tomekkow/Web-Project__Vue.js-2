<template>
  <div class="icon-box" :class="hideClass">
    <div class="icon-box__section icon-box__section-vertical-line">
      <img :src="image" class="icon-box__section-image" :class="widerClass" />
      <div class="icon-box__section-title">{{ title }}</div>
      <div class="icon-box__section-text">{{ text }}</div>
    </div>
  </div>
</template>

<script src="./icon-box.js">
  
</script>

<style src="./icon-box.scss" lang="scss">
  
</style>
