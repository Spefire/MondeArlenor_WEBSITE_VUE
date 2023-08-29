<template>
  <CreationForm
    form-title="Choix des caractéristiques"
    :is-modified="isModified"
    :is-invalid="v$.form.$invalid"
    @outCancel="cancelForm()"
    @outSubmit="submitForm()">

    <!------------------------------------------------------------------->
    <div class="creation-column">
      <div class="creation-description layout-bloc text-justify">
        <template v-if="selectCaract === 'FOR'">
          <h2 class="margin-top-0 text-center">La Force</h2>
          <span v-html="caractDescriptionEnum.Force.Libelle" />
        </template>
      
        <template v-if="selectCaract === 'HAB'">
          <h2 class="margin-top-0 text-center">L'Habileté</h2>
          <span v-html="caractDescriptionEnum.Habilete.Libelle" />
        </template>
      
        <template v-if="selectCaract === 'INT'">
          <h2 class="margin-top-0 text-center">L'Intellect</h2>
          <span v-html="caractDescriptionEnum.Intellect.Libelle" />
        </template>

        <template v-if="selectCaract === 'TEN'">
          <h2 class="margin-top-0 text-center">La Ténacité</h2>
          <span v-html="caractDescriptionEnum.Tenacite.Libelle" />
        </template>
      
        <template v-if="selectCaract === 'CHA'">
          <h2 class="margin-top-0 text-center">Le Charisme</h2>
          <span v-html="caractDescriptionEnum.Charisme.Libelle" />
        </template>
      
        <template v-if="selectCaract === 'MAG'">
          <h2 class="margin-top-0 text-center">La Magie</h2>
          <span v-html="caractDescriptionEnum.Magie.Libelle" />
        </template>
      </div>
    </div>

    <!------------------------------------------------------------------->
    <div class="creation-column">
      <div class="form-element">
        <span>Caractéristiques du personnage <span required-libelle>*</span></span>
        <table class="layout-bloc">
          <thead>
            <tr>
              <th class="col-40">Nom</th>
              <th class="col-60">Valeur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="col-40">Force (FOR)</td>
              <td class="col-55">
                <input
                  type="range"
                  min="0"
                  :max="maxCaract"
                  step="1"
                  v-model.trim.lazy="v$.form.for.$model"
                  @change="changeCaract('FOR')">
              </td>
              <td class="col-05">{{ form.for }}</td>
            </tr>
            <tr>
              <td class="col-40">Habileté (HAB)</td>
              <td class="col-55">
                <input
                  type="range"
                  min="0"
                  :max="maxCaract"
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
                  min="0"
                  :max="maxCaract"
                  step="1"
                  v-model.trim.lazy="v$.form.int.$model"
                  @change="changeCaract('INT')">
              </td>
              <td class="col-05">{{ form.int }}</td>
            </tr>
            <tr>
              <td class="col-40">Ténacité (TEN)</td>
              <td class="col-55">
                <input
                  type="range"
                  min="0"
                  :max="maxCaract"
                  step="1"
                  v-model.trim.lazy="v$.form.ten.$model"
                  @change="changeCaract('TEN')">
              </td>
              <td class="col-05">{{ form.ten }}</td>
            </tr>
            <tr>
              <td class="col-40">Charisme (CHA)</td>
              <td class="col-55">
                <input
                  type="range"
                  min="0"
                  :max="maxCaract"
                  step="1"
                  v-model.trim.lazy="v$.form.cha.$model"
                  @change="changeCaract('CHA')">
              </td>
              <td class="col-05">{{ form.cha }}</td>
            </tr>
            <tr>
              <td class="col-40">Magie (MAG)</td>
              <td class="col-55">
                <input
                  type="range"
                  min="0"
                  :max="maxCaract"
                  step="1"
                  v-model.trim.lazy="v$.form.mag.$model"
                  @change="changeCaract('MAG')">
              </td>
              <td class="col-05">{{ form.mag }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        v-if="form.pointsLeft !== 0"
        class="layout-bloc margin-top-1"
        required-libelle>
        Points restants à répartir : {{ form.pointsLeft }}
      </div>

      <div
        v-if="form.pointsLeft === 0"
        class="layout-bloc margin-top-1">
        Tous les points ont été répartis.
      </div>

      <div class="layout-bloc margin-top-1">
        Le Bonus d'Initiative est à : <b>{{ getInitiative() }}</b><br>
        Les Points de Vie sont à : <b>{{ getPointsDeVie() }}</b>
      </div>
    </div>
  </CreationForm>
</template>

<script lang="ts" src="./CaractsForm.ts"></script>
