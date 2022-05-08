<template>
  <!-- Description de la caractéristique sélectionnée -->
  <div class="layout-left creation-form">
    <div class="creation-description bloc-text">
      Pas de caractéristique sélectionnée.
    </div>
  </div>

  <div class="layout-right">
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
                v-model.trim.lazy="v$.form.vig.$model">
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
                v-model.trim.lazy="v$.form.hab.$model">
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
                v-model.trim.lazy="v$.form.int.$model">
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
                v-model.trim.lazy="v$.form.cha.$model">
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
                v-model.trim.lazy="v$.form.pou.$model">
            </td>
            <td class="col-05">{{ form.pou }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bloc-text margin-top-1">
      Points restants à répartir : {{ form.pointsLeft }}
    </div>

    <div class="bloc-text margin-top-1">
      L'Initiative est à : 0<br>
      Les Points de Vie sont à : 0
    </div>

    <button
      class="margin-top-1 link-button"
      :disabled="v$.form.$invalid"
      @click="submitForm()">Suivant</button>
  </div>
</template>

<style lang="scss" scoped src="./CreationView.scss"></style>
<script lang="ts" src="./CaractsForm.ts"></script>
