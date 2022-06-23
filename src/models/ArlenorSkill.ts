import { ArlenorEnum } from "./ArlenorEnum";
import { ArlenorGroup } from "./ArlenorGroup";
import { ArlenorRace } from "./ArlenorRace";
import { ArlenorSpeciality } from "./ArlenorSpeciality";

export class ArlenorSkill {
  public name: string;
  public image: string;
  public type: ArlenorEnum;

  // Pour les compétences de race
  public race: ArlenorRace | null;
  public description: string;

  // Pour les autres compétences
  public group: ArlenorGroup | null;
  public specialities: ArlenorSpeciality[];
  public caracts: ArlenorEnum[];

  constructor(name: string, type: ArlenorEnum) {
    this.name = name;
    this.description = "";
    this.image = "";
    this.type = type;
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
    if (this.type.Code === SkillsEnum.CompetenceArme.Code) {
      this.image = require("./../assets/icons/skills/armes.png");
    }
    else if (this.type.Code === SkillsEnum.CompetenceArmure.Code) {
      this.image = require("./../assets/icons/skills/armures.png");
    }
    else if (this.type.Code === SkillsEnum.TempsIncantation.Code) {
      this.image = require("./../assets/icons/skills/incantation.png");
    }
    else if (this.type.Code === SkillsEnum.NombreUtilisation.Code) {
      this.image = require("./../assets/icons/skills/rechargement.png");
    }
  }
}

export class SkillsEnum {
  // Compétences de race
  static CompetenceRace: ArlenorEnum = { Code: "ABL_RACE", Libelle: "Compétence de race" };
  // Compétences de groupe et de classe/spécialité
  static CompetenceArme: ArlenorEnum = { Code: "ABL_ARME", Libelle: "Compétence d'arme" };
  static CompetenceArmure: ArlenorEnum = { Code: "ABL_ARMURE", Libelle: "Compétence d'armure" };
  static TempsIncantation: ArlenorEnum = { Code: "TEMPS_INC", Libelle: "Temps d'incantation" };
  static NombreUtilisation: ArlenorEnum = { Code: "NB_UTIL", Libelle: "Nombre d'utilisations" };
  // Autres compétences
  static CompetenceAutre: ArlenorEnum = { Code: "ABL_OTHER", Libelle: "Autre compétence" };
}
