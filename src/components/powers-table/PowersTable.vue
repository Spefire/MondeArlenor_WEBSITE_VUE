<template>
  <div class="form-row margin-top-1">
    <div class="form-col-33 form-element">
      <span>Sélection d'un groupe :</span>
      <div class="dropdown">
        <select
          class="dropdown-select"
          v-model="selectedGroup"
          @change="changeGroup">
          <option :value="null">-</option>
          <option
            v-for="(grp, index) in allGroups"
            :value="grp.code"
            :key="index">{{ grp.name }}</option>
        </select>
      </div>
    </div>
    <div class="form-col-33 form-element">
      <span>Sélection d'une classe :</span>
      <div class="dropdown">
        <select
          class="dropdown-select"
          v-model="selectedSpeciality"
          @change="changeSpeciality">
          <option :value="null">-</option>
          <option
            v-for="(spe, index) in allSpecialities"
            :value="spe.code"
            :key="index">{{ spe.name }}</option>
        </select>
      </div>
    </div>
    <div class="form-col-33 form-element">
      <span>Recherche par nom :</span>
      <input
        type="text"
        v-model="searchName"
        @keyup="changeFilteredPowers">
    </div>
  </div>

  <table class="bloc-text margin-top-1">
    <thead>
      <tr>
        <th
          colspan="2"
          class="col-40">Nom du pouvoir</th>
        <th class="col-20">Cristal concerné</th>
        <th class="col-20">Rang</th>
        <th class="col-20">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-if="filteredPowers.length === 0"
        class="table-line">
        <td
          colspan="5"
          class="col-100 text-center">Aucun pouvoir</td>
      </tr>
      <template
        v-for="(power, index) in filteredPowers"
        :key="index">
        <tr
          class="table-line"
          :class="{ selected : selectedPower === power }">
          <td class="col-05">
            <div class="creation-imgs">
              <img
                v-if="power.image"
                class="power-img"
                :src="power.image"
                :alt="power.type.Libelle">
              <img
                class="power-img-ok"
                src="./../../assets/icons/powers/ok.png">
            </div>
          </td>
          <td 
            class="col-35 pointer"
            @click="seeMore(power)">{{ power.name }}</td>
          <td class="col-20">{{ getLibSpeGrp(power) }}</td>
          <td class="col-20">{{ power.rank.Libelle }} ({{ power.rank.Code }})</td>
          <td class="col-20">
            <button
              class="link-button"
              title="Modifier"
              @click="editPower(power)">Mod.</button>

            <button
              class="link-button alert-button margin-left-1"
              title="Supprimer"
              @click="deletePower(power)">Sup.</button>
          </td>
        </tr>
        <tr
          v-if="selectedPower === power"
          class="table-line selected">
          <td colspan="5">
            <p>
              <i>
                <span title="Type de pouvoir">{{ power.type.Libelle }}</span>
                &nbsp;•&nbsp;
                <span title="Portée du pouvoir">{{ power.range.Libelle }}</span>
                &nbsp;•&nbsp;
                <span title="Durée du pouvoir">{{ power.duration.Libelle }}</span>
                &nbsp;•&nbsp;
                <span title="Tests du pouvoir">{{ power.tests.Libelle }}</span>
                &nbsp;•&nbsp;
                <span>{{ power.chaneling ? "Avec" : "Sans" }} canalisation</span>
              </i>
              <br>
              {{ power.description ? power.description : "Aucune description disponible" }}</p>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts" src="./PowersTable.ts"></script>