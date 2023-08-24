<template>
  <CreationForm
    form-title="Choix de l'équipement"
    :is-disabled="isDisabled"
    :is-modified="isModified"
    :is-invalid="v$.form.$invalid"
    @outCancel="cancelForm()"
    @outSubmit="submitForm()" />
</template>

<style lang="scss" scoped src="./../CreationView.scss"></style>
<script lang="ts" src="./StuffForm.ts"></script>
