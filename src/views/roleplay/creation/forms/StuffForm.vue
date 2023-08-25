<template>
  <CreationForm
    form-title="Choix de l'équipement"
    :is-modified="isModified"
    :is-invalid="v$.form.$invalid"
    @outCancel="cancelForm()"
    @outSubmit="submitForm()" />
</template>

<script lang="ts" src="./StuffForm.ts"></script>
