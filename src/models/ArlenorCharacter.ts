import { ArlenorAPI } from "./ArlenorAPI";
import { ArlenorCaracts } from "./ArlenorCaracts";
import { ArlenorLevel } from "./ArlenorLevel";
import { ArlenorRace } from "./ArlenorRace";
import { ArlenorSpeciality } from "./ArlenorSpeciality";
import { getListRaces } from "./data/ListRaces";
import { ArlenorSpecialities } from "./data/ListSpecialities";

export class ArlenorCharacter extends ArlenorAPI {
  
  // Variables à sauvegarder
  public numLevel: number;
  public avatar: string;
  public name: string;
  public age: number;
  public gender: string;
  
  public story: string;
  public description: string;
  public traits: string;
  public belives: string;
  public importances: string;

  public codeRace: string | null;
  public idsSkills: number[];
  public codeSpeciality01: string | null;
  public idsPowers01: number[];
  public codeSpeciality02: string | null;
  public idsPowers02: number[];

  // Variables du front
  public caracts: ArlenorCaracts;

  // Variables dérivées
  get initiative(): number {
    return this.caracts.hab + this.caracts.int;
  }

  get totalCaracts(): number {
    return this.caracts.for
      + this.caracts.hab
      + this.caracts.int
      + this.caracts.ten
      + this.caracts.cha
      + this.caracts.mag;
  }

  get healthMax(): number {
    let bonusMalus = 0;
    if (this.codeRace) {
      const races = getListRaces();
      if (this.codeRace === races[1].code || this.codeRace === races[4].code) bonusMalus++;
    }
    if (this.caracts.ten > 2) bonusMalus++;
    else if (this.caracts.ten === 0) bonusMalus--;
    return this.level.maxHealth + bonusMalus;
  }

  get level(): ArlenorLevel {
    if (!this.numLevel) return new ArlenorLevel(1);
    return new ArlenorLevel(this.numLevel);
  }

  get race(): ArlenorRace | null {
    if (!this.codeRace) return null;
    return ArlenorRace.getRace(this.codeRace);
  }

  get speciality01(): ArlenorSpeciality | null {
    if (!this.codeSpeciality01) return null;
    return ArlenorSpecialities.getSpeciality(this.codeSpeciality01);
  }

  get speciality02(): ArlenorSpeciality | null {
    if (!this.codeSpeciality02) return null;
    return ArlenorSpecialities.getSpeciality(this.codeSpeciality02);
  }

  constructor() {
    super();
    this.numLevel = 1;
    this.avatar = "";
    this.name = "";
    this.age = 0;
    this.gender = "";

    this.story = "";
    this.description = "";
    this.traits = "";
    this.belives = "";
    this.importances = "";

    this.caracts = new ArlenorCaracts();
    this.codeRace = null;
    this.idsSkills = [];
    this.codeSpeciality01 = null;
    this.idsPowers01 = [];
    this.codeSpeciality02 = null;
    this.idsPowers02 = [];
  }
}