import { ArlenorAPI } from "./ArlenorAPI";
import { ArlenorCaracts } from "./ArlenorCaracts";
import { ArlenorCrystal } from "./ArlenorCrystal";
import { ArlenorLevel } from "./ArlenorLevel";
import { ArlenorRace } from "./ArlenorRace";
import { getListRaces } from "./data/ListRaces";

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
  public idCaracts: number;
  public idsCrystals: number[];
  public idsSkills: number[];

  // Variables du front
  public caracts: ArlenorCaracts;
  public crystals: ArlenorCrystal[];

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
    this.codeRace = null;
    this.idCaracts = 0;
    this.caracts = new ArlenorCaracts();
    this.idsCrystals = [];
    this.crystals = [new ArlenorCrystal(), new ArlenorCrystal()];
    this.idsSkills = [];
  }
}