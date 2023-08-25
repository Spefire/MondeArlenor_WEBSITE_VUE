<template>
  <CreationForm
    form-title="Choix de l'identité"
    :is-modified="isModified"
    :is-invalid="v$.form.$invalid"
    @outCancel="cancelForm()"
    @outSubmit="submitForm()">
    
    <!------------------------------------------------------------------->
    <div class="creation-column">
      <div class="form-element">
        <span>Avatar du personnage</span>
        <label
          for="avatar"
          class="creation-avatar">
          <span v-if="!form.avatar">Importer une image<br>(ratio 1:1 | JPG, PNG | max 2Mo)</span>
          <img
            v-if="form.avatar"
            alt="Avatar du personnage"
            :src="form.avatar">
        </label>
        <input
          type="file"
          name="avatar"
          id="avatar"
          accept="image/png, image/jpeg"
          @change="changeAvatar">
      </div>
      <div class="form-element">
        <span>Nom du personnage <span required-libelle>*</span></span>
        <input
          type="text"
          class="text-center"
          maxlength="40"
          v-model.trim.lazy="v$.form.name.$model">
      </div>
      <div class="layout-row">
        <div class="layout-col-25 form-element">
          <span>Âge (1-200)<span required-libelle>*</span></span>
          <input
            type="number"
            class="text-center"
            min="1"
            max="200"
            placeholder="1-200"
            v-model.trim.lazy="v$.form.age.$model">
        </div>
        <div class="layout-col-75 form-element">
          <span>Genre du personnage <span required-libelle>*</span></span>
          <input
            type="text"
            class="text-center"
            maxlength="12"
            placeholder="Masculin, féminin, indéterminé (il, elle, iel)..."
            v-model.trim.lazy="v$.form.gender.$model">
        </div>
      </div>
    </div>

    <!------------------------------------------------------------------->
    <div class="creation-column">
      <div class="form-element">
        <span>Description physique</span>
        <input
          type="text"
          maxlength="70"
          placeholder="Robuste, élégant, frêle, ridé, jeune..."
          v-model.trim.lazy="v$.form.description.$model">
      </div>
      <div class="form-element">
        <span>Traits de caractère</span>
        <input
          type="text"
          maxlength="70"
          placeholder="Timide, sérieux, charmeur, rêveur, généreux..."
          v-model.trim.lazy="v$.form.traits.$model">
      </div>
      <div class="form-element">
        <span>Idéologies et croyances</span>
        <input
          type="text"
          maxlength="70"
          placeholder="Allié des mutants, vénération des divinités, esprit scientifique..."
          v-model.trim.lazy="v$.form.belives.$model">
      </div>
      <div class="form-element">
        <span>Personnes ou lieux significatifs</span>
        <input
          type="text"
          maxlength="70"
          placeholder="Un parent, un ami, la ville natale, un sanctuaire..."
          v-model.trim.lazy="v$.form.importances.$model">
      </div>
      <div class="form-element">
        <span>Histoire personnelle et faits divers</span>
        <textarea
          placeholder="Son enfance, sa motivation dans la vie, l'acquisition de ses pouvoirs, des haut-faits réalisés..."
          v-model.trim.lazy="v$.form.story.$model"
          maxlength="800" />
      </div>
    </div>
  </CreationForm>
</template>

<script lang="ts" src="./IdentityForm.ts"></script>
