<template>
<div class="person-card">
  <div class="person-card__name">{{ name }}
    <span class="person-card__position">{{ position }}</span></div>
  <img :src="image" class="person-card__image">
  <button class="person-card__button">learn more</button>
</div>
</template>
<script src="./person-card.js"></script>
<style src="./person-card.scss" lang="scss"></style>
