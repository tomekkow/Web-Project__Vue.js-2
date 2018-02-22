<template>
<div>
  <div class="section-hello__hi section-hello--hide section-hello--show-small">
    Hi, we are <span>Neoncube</span>
  </div>
  <div class="section-hello">
    <div class="grid-container section-hello--hide section-hello--show-medium">
      <div class="section-hello__hi">
        Hi, we are <span>Neoncube</span>
      </div>
      <div class="section-hello__message">{{ message }}</div>
    </div>
  </div>
  <div class="grid-container">
    <div class="section-hello__message section-hello--hide section-hello--show-small">{{ message }}</div>
  </div>
</div>
</template>

<script src="./section-hello.js"></script>
<style src="./section-hello.scss" lang="scss"></style>
