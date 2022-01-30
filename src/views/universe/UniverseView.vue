<template>
  <div class="universe-view layout-view background-universe">
    <div class="layout-center large">

      <div class="world-container">
        <div class="world-left">
          <img
            class="fact-image"
            :src="currentZone.image"
            :alt="currentZone.name">
          <div class="map-header">
            <div
              class="select-button inverted"
              @click="previousSelection()">
              <i class="icon icon-arrow-right2" />
            </div>
            <div class="text-center margin-bottom-1">
              <h2>{{ currentZone.name }}</h2>
              <h3>{{ currentZone.sector.name }}</h3>
            </div>
            <div
              class="select-button"
              @click="nextSelection()">
              <i class="icon icon-arrow-right2" />
            </div>
          </div>
          <div class="fact-description">
            <p>{{ currentZone.description }}</p>
          </div>
          <p class="fact-comment margin-top-1">
            "{{ currentZone.comment }}"
            <br>
            - {{ currentZone.commentName }}
          </p>
        </div>
        <div class="world-right">
          <div class="map-title margin-bottom-1">
            <h2>{{ currentZone.sector.name }}</h2>
            <h3>
              Niveau de danger&nbsp;:&nbsp;<span class="text-capitalize">{{ currentZone.sector.danger }}</span>
              / Climat&nbsp;:&nbsp;<span class="text-capitalize">{{ currentZone.sector.climate }}</span>
            </h3>
          </div>
          <div class="map-icons">
            <img
              class="universe-map bloc-text"
              src="./../../assets/images/world/worldmap.jpg"
              alt="">
            <!--img
              *ngIf="select == 0"
              class="map-icon map-icon-00"
              src="assets/images/world/icon_map_selected.svg"
              alt="">
            <img
              *ngIf="select != 0"
              class="map-icon map-icon-00"
              src="assets/images/world/icon_map.svg"
              alt=""
              (click)="setSelection(0)"
              (mouseover)="hoverIcon(0)"
              (mouseout)="unhoverIcon(0)">
            <img
              *ngIf="select == 1"
              class="map-icon map-icon-01"
              src="assets/images/world/icon_map_selected.svg"
              alt="">
            <img
              *ngIf="select != 1"
              class="map-icon map-icon-01"
              src="assets/images/world/icon_map.svg"
              alt=""
              (click)="setSelection(1)"
              (mouseover)="hoverIcon(1)"
              (mouseout)="unhoverIcon(1)">
            <img
              *ngIf="select == 2"
              class="map-icon map-icon-02"
              src="assets/images/world/icon_map_selected.svg"
              alt="">
            <img
              *ngIf="select != 2"
              class="map-icon map-icon-02"
              src="assets/images/world/icon_map.svg"
              alt=""
              (click)="setSelection(2)"
              (mouseover)="hoverIcon(2)"
              (mouseout)="unhoverIcon(2)">
            <img
              *ngIf="select == 3"
              class="map-icon map-icon-03"
              src="assets/images/world/icon_map_selected.svg"
              alt="">
            <img
              *ngIf="select != 3"
              class="map-icon map-icon-03"
              src="assets/images/world/icon_map.svg"
              alt=""
              (click)="setSelection(3)"
              (mouseover)="hoverIcon(3)"
              (mouseout)="unhoverIcon(3)">
            <img
              *ngIf="select == 4"
              class="map-icon map-icon-04"
              src="assets/images/world/icon_map_selected.svg"
              alt="">
            <img
              *ngIf="select != 4"
              class="map-icon map-icon-04"
              src="assets/images/world/icon_map.svg"
              alt=""
              (click)="setSelection(4)"
              (mouseover)="hoverIcon(4)"
              (mouseout)="unhoverIcon(4)"-->
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" src="./UniverseView.ts"></script>
