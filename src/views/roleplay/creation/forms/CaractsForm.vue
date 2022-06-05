<template>
  <!-- Description de la caractéristique sélectionnée -->
  <div class="layout-left creation-form">
    <div class="creation-description bloc-text text-justify">
      <template v-if="selectCaract === 'VIG'">
        <h2 class="margin-top-0 text-center">La Vigueur</h2>
        <span v-html="caractDescriptionEnum.Vigueur.Libelle" />
      </template>
      
      <template v-if="selectCaract === 'HAB'">
        <h2 class="margin-top-0 text-center">L'Habileté</h2>
        <span v-html="caractDescriptionEnum.Habilete.Libelle" />
      </template>
      
      <template v-if="selectCaract === 'INT'">
        <h2 class="margin-top-0 text-center">L'Intellect</h2>
        <span v-html="caractDescriptionEnum.Intellect.Libelle" />
      </template>
      
      <template v-if="selectCaract === 'CHA'">
        <h2 class="margin-top-0 text-center">Le Charisme</h2>
        <span v-html="caractDescriptionEnum.Charisme.Libelle" />
      </template>
      
      <template v-if="selectCaract === 'POU'">
        <h2 class="margin-top-0 text-center">Le Pouvoir</h2>
        <span v-html="caractDescriptionEnum.Pouvoir.Libelle" />
      </template>
    </div>
  </div>

  <!-- Choix de la caractéristique -->
  <div class="layout-right creation-form">
    <div class="creation-element">
      <span>Caractériques du personnage <span required-libelle>*</span></span>
      <table class="bloc-text margin-top-1">
        <thead>
          <tr>
            <th class="col-40">Nom</th>
            <th class="col-60">Valeur</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="col-40">Vigueur (VIG)</td>
            <td class="col-55">
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                v-model.trim.lazy="v$.form.vig.$model"
                @change="changeCaract('VIG')">
            </td>
            <td class="col-05">{{ form.vig }}</td>
          </tr>
          <tr>
            <td class="col-40">Habileté (HAB)</td>
            <td class="col-55">
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                v-model.trim.lazy="v$.form.hab.$model"
                @change="changeCaract('HAB')">
            </td>
            <td class="col-05">{{ form.hab }}</td>
          </tr>
          <tr>
            <td class="col-40">Intellect (INT)</td>
            <td class="col-55">
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                v-model.trim.lazy="v$.form.int.$model"
                @change="changeCaract('INT')">
            </td>
            <td class="col-05">{{ form.int }}</td>
          </tr>
          <tr>
            <td class="col-40">Charisme (CHA)</td>
            <td class="col-55">
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                v-model.trim.lazy="v$.form.cha.$model"
                @change="changeCaract('CHA')">
            </td>
            <td class="col-05">{{ form.cha }}</td>
          </tr>
          <tr>
            <td class="col-40">Pouvoir (POU)</td>
            <td class="col-55">
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                v-model.trim.lazy="v$.form.pou.$model"
                @change="changeCaract('POU')">
            </td>
            <td class="col-05">{{ form.pou }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      v-if="form.pointsLeft !== 0"
      class="bloc-text margin-top-1"
      required-libelle>
      Points restants à répartir : {{ form.pointsLeft }}
    </div>

    <div
      v-if="form.pointsLeft === 0"
      class="bloc-text margin-top-1">
      Tous les points ont été répartis.
    </div>

    <div class="bloc-text margin-top-1">
      L'Initiative est à : 0<br>
      Les Points de Vie sont à : 0
    </div>

    <div class="creation-nav-button">
      <button
        class="link-button"
        @click="cancelForm()">
        <template v-if="!isModified">
          Précédent
        </template>
        <template v-if="isModified">
          Annuler les modifications
          <template v-if="needConfirm">
            (Confirmez ?) 
          </template>
        </template>
      </button>

      <button
        class="link-button"
        :disabled="v$.form.$invalid"
        @click="submitForm()">Suivant</button>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./../CreationView.scss"></style>
<script lang="ts" src="./CaractsForm.ts"></script>
