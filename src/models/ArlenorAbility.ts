import { ArlenorEnum } from "./ArlenorEnum";
import { ArlenorGroup } from "./ArlenorGroup";
import { ArlenorRace } from "./ArlenorRace";
import { ArlenorSpeciality } from "./ArlenorSpeciality";

export class ArlenorAbility {
  public name: string;
  public image: string;
  public typeSkill: ArlenorEnum;

  // Pour les abilités de race
  public race: ArlenorRace | null;
  public description: string;

  // Pour les autres compétences de race
  public group: ArlenorGroup | null;
  public specialities: ArlenorSpeciality[];
  public caracts: ArlenorEnum[];

  constructor(name: string, typeSkill: ArlenorEnum) {
    this.name = name;
    this.description = "";
    this.image = "";
    this.typeSkill = typeSkill;
    this.race = null;
    this.group = null;
    this.specialities = [];
    this.caracts = [];

    this.setImage();
  }

  public initGrpSpe(group: ArlenorGroup | null, specialities: ArlenorSpeciality[]): void {
    this.group = (group ? group : specialities[0].group);
    this.specialities = specialities;
  }

  public initRace(race: ArlenorRace): void {
    this.race = race;
  }

  public setImage(): void {
    if (this.typeSkill.Code === AbilitiesEnum.AbiliteArme.Code) {
      this.image = require("./../assets/icons/abilities/armes.png");
    }
    else if (this.typeSkill.Code === AbilitiesEnum.AbiliteArmure.Code) {
      this.image = require("./../assets/icons/abilities/armures.png");
    }
    else if (this.typeSkill.Code === AbilitiesEnum.TempsIncantation.Code) {
      this.image = require("./../assets/icons/abilities/incantation.png");
    }
    else if (this.typeSkill.Code === AbilitiesEnum.NombreUtilisation.Code) {
      this.image = require("./../assets/icons/abilities/rechargement.png");
    }
  }
}

export class AbilitiesEnum {
  // Abilites de race
  static AbiliteRace: ArlenorEnum = { Code: "ABL_RACE", Libelle: "Abilité de race" };
  // Abilités de groupe et de classe/spécialité
  static AbiliteArme: ArlenorEnum = { Code: "ABL_ARME", Libelle: "Abilité d'arme" };
  static AbiliteArmure: ArlenorEnum = { Code: "ABL_ARMURE", Libelle: "Abilité d'armure" };
  static TempsIncantation: ArlenorEnum = { Code: "TEMPS_INC", Libelle: "Temps d'incantation" };
  static NombreUtilisation: ArlenorEnum = { Code: "NB_UTIL", Libelle: "Nombre d'utilisations" };
}
