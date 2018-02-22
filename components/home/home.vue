<template>
  <div class="home">
    <page-header />
    <section-hello />
    <section-hello-buttons />
    <page-city-section />
    <page-team />
    <div class="grid-container">
      <div class="grid-x grid-padding-x grid-padding-y">
        <div class="cell small-12 medium-6 large-4" v-for="person in people" :key="person.name">
          <person-card :name="person.name" :position="person.position" :image="person.image" />
        </div>
      </div>
    </div>
    <page-what-do />
    <div class="grid-container">
      <div class="grid-x grid-padding-x grid-padding-y">
        <div class="cell small-12 medium-6 large-4" v-for="item in items" :key="item.title">
          <icon-box :image="item.image" :title="item.title" :text="item.text" />
        </div>
      </div>
    </div>
    <page-case-studies />
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="cell small-12 medium-4 large-4" v-for="area in cases" :key="area.area">
          <case-card :img="area.img" :area="area.area" :area2="area.area2" />
        </div>
      </div>
    </div>
    <page-our-expertise />
     <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="cell small-12 medium-4 large-4" v-for="item in expertise" :key="item.title">
          <icon-box :image="item.image" :wider="item.wider" :hide="item.hide" :title="item.title" :text="item.text" />
        </div>
      </div>
    </div>
    <page-how-we-work />
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="cell small-12 medium-4 large-4" v-for="work in works" :key="work.image">
          <icon-box  :image="work.image" :title="work.title" :text="work.text" />
        </div>
      </div>
    </div>
    <page-two-offices />
    <page-talk-business />
    <page-footer />
  </div>
</template>

<script src="./home.js">
  
</script>

<style src="./home.scss" lang="scss">
  
</style>
