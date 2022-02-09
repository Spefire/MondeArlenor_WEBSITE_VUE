<template>
  <HeadLayout
    :title="title"
    :image-left="imageLeft"
    :image-right="imageRight">
    <p class="bloc-text">
      On raconte que l’<b>Humanité</b> a commencé avec un millier d’humains, tenant entre leurs mains, les <b>tablettes de cristal</b>.
      Comme si Arlénor les avait créé en leur donnant une voie à suivre dans leur développement.<br>
      Ils n’avaient pas encore acquis le langage, qu’ils comprenaient déjà le sens des écritures de ces tablettes…<br>
      <br>
      Les premiers humains se seraient installés dans les <b>Plaines de Terfil</b>, à l’endroit même où se tient aujourd’hui&nbsp;:&nbsp;<b>la cité de Faradel</b>.<br>
      Durant leur installation, les humains firent une découverte&nbsp;:&nbsp;dans certaines roches se trouvaient des cristaux, faits de la même matière que celle des tablettes.
      Au toucher, ces cristaux produisirent des phénomènes étranges, que l’on qualifie aujourd’hui de <b>magie</b>,
      et les humains commencèrent alors à ressentir comme un lien inexplicable se former en leur contact.<br>
      <br>
      La plupart considère ces cristaux comme <b>des fragments de pouvoirs des anges et démons</b>.
      Cette idée a été renforcée par le fait que certains arrivent à les utiliser, et d'autres non&nbsp;:&nbsp;<b>comme si certains étaient des élus</b>.<br>
      Le Monde d'Arlénor vit alors&nbsp;:&nbsp;une chasse aux cristaux, un développement d'outils, d'armes, et même une citée basée sur ces cristaux.<br>
      Et aujourd'hui, la cité de Faradel est LE lieu le plus magique et le plus avancé technologiquement qui soit, dans le Monde d'Arlénor.
    </p>
  </HeadLayout>

  <div little-separator />

  <div class="magic-view layout-view background-universe-vertical">
    <div class="layout-center large magic-container">
      <div class="magic-left">
        <div class="magic-imgs">
          <img
            class="crystal-main"
            src="./../../../assets/images/magic/crystal.png"
            alt="">
          <img
            class="crystal-data01"
            src="./../../../assets/images/magic/crystal_data01.png"
            alt="">
          <img
            class="crystal-data02"
            src="./../../../assets/images/magic/crystal_data02.png"
            alt="">
          <img
            class="crystal-data03"
            src="./../../../assets/images/magic/crystal_data03.png"
            alt="">
        </div>
      </div>
      <div class="magic-right">
        <div class="magic-header">
          <h2>Propriétés globales aux cristaux</h2>
          <p class="bloc-text">
            Ces propriétés s'appliquent pour les cristaux&nbsp;:<br>
            énergétiques, instantanés et évolutifs.
          </p>
        </div>
        <p class="magic-crystals bloc-text">
          - Ils mesurent entre 1 cm et 2 m.<br>
          - La couleur d'un cristal est liée à son effet, à son pouvoir.<br>
          - Un cristal est très solide, résistant.<br>
          - L'utilisateur se lie à un cristal évolutif à la fois.<br>
          - Plus l'utilisateur utilise ses cristaux, plus le lien entre eux s'intensifie.<br>
          - Plus l'utilisateur est loin de son cristal, plus il lui est difficile de l'utiliser.<br>
          - Les cristaux viennent principalement des mines de la cité désertique Jirakan.<br>
          - Seuls les cristalliens (métier rare et complexe) peuvent les retravailler en leur donnant une forme précise.<br>
          - Les cristaux ne peuvent pas être séparés en plusieurs parties. Cassés, ils perdent totalement leur pouvoir.<br>
          - Il existerait des cristaux uniques, dits 'légendaires', aux puissances incommensurables...
        </p>
      </div>
      <div class="magic-top">
        <div class="magic-grid docs-grid-list">
          <div
            v-for="(magic, index) in allMagics"
            class="docs-grid-element"
            :key="index">
            <img
              :src="magic.image"
              :alt="magic.name">
            <div class="docs-grid-infos">
              <div class="margin-bottom-1">
                <span class="text-bold">{{ magic.name }}</span>
              </div>
              <p v-html="magic.description" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./MagicView.scss"></style>
<script lang="ts" src="./MagicView.ts"></script>
