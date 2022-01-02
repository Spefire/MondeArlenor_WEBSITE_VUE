<template>

  <!-------------------------- Mode Large ---------------------------->

  <footer v-if="displayLarge">
    <div class="footer-infos">
      <div class="footer-left">
        <div class="footer-container">
          <img
            src="../../assets/images/logo.png"
            alt="">
        </div>
        <div class="footer-container">
          <p>
            Le Monde d'Arlénor a été créé en Janvier 2015, et je ne sais pas quoi dire plus... Voici une autre phrase en attendant.
          </p>
          <ArrowButton :link-page="'/about'" />
        </div>
      </div>
      <div class="footer-right">
        <FooterLink
          :with-border="true"
          :link="'https://nicholas-brun.fr'"
          :icon-class="'icon-user'" />
        <FooterLink
          :with-border="true"
          :link="'https://www.instagram.com/spefireflies'"
          :icon-class="'icon-instagram'" />
        <FooterLink
          :with-border="true"
          :link="'https://www.github.com/spefire'"
          :icon-class="'icon-github'" />
      </div>
    </div>

    <div class="footer-navigation">
      <nav>
        <router-link
          class="link"
          to="/legacy">Mentions Légales</router-link>
        <router-link
          class="link"
          to="/about">A propos</router-link>
      </nav>
    </div>
  </footer>

  <!-------------------------- Mode Small ---------------------------->
  
  <footer v-else>
    <div class="footer-small">
      <div class="footer-section-mobile">
        <FooterLink
          :link="'https://nicholas-brun.fr'"
          :icon-class="'icon-user'" />
        <FooterLink
          :link="'https://www.instagram.com/spefireflies'"
          :icon-class="'icon-instagram'" />
        <FooterLink
          :link="'https://www.github.com/spefire'"
          :icon-class="'icon-github'" />
      </div>
      <nav>
        <router-link
          class="link"
          to="/legacy">Mentions Légales</router-link>
        <router-link
          class="link"
          to="/about">A propos</router-link>
      </nav>
      <div class="footer-section">
        <FooterLink
          class="small"
          :link="'https://nicholas-brun.fr'"
          :icon-class="'icon-user'" />
        <FooterLink
          class="small"
          :link="'https://www.instagram.com/spefireflies'"
          :icon-class="'icon-instagram'" />
        <FooterLink
          class="small"
          :link="'https://www.github.com/spefire'"
          :icon-class="'icon-github'" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped src="./Footer.scss"></style>
<script lang="ts" src="./Footer.ts"></script>