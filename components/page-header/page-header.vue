<template>
  <div>
    <div class="page-header page-header--hide page-header--show-small">
      <div class="grid-x align-middle">
        <div class="cell shrink">
          <div>
            <a href="/">
              <img src="~assets/img/neoncube-logo.svg" class="page-header__logo">
            </a>
          </div>
        </div>
        <div class="cell auto"></div>
        <div class="cell shrink">
          <button class="page-header__menu page-header__menu--show-small"></button>
        </div>
      </div>
      <div class="page-header__divider"></div>
    </div>
    <div class="page-header page-header--hide page-header--show-medium">
      <div class="grid-x align-middle">
        <div class="cell shrink">
          <div>
            <a href="/">
              <img src="~assets/img/neoncube-logo.svg" class="page-header__logo">
            </a>
          </div>
        </div>
        <div class="cell auto">
          <div class="page-header__menu-list">
            <ul class="menu align-right">
              <li v-for="item in itemList" :key="item.text"><a href="#" class="page-header__menu-list-item">{{ item.text }}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="page-header__divider"></div>
    </div>
  </div>
</template>

<script src="./page-header.js"></script>
<style src="./page-header.scss" lang="scss"></style>
