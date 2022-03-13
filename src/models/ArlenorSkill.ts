import { ArlenorEnum } from "./ArlenorEnum";
import { ArlenorGroup } from "./ArlenorGroup";
import { ArlenorSpeciality } from "./ArlenorSpeciality";

export class ArlenorSkill {
  public name: string;
  public description: string;
  public image: string;
  public typeSkill: ArlenorEnum;
  public group: ArlenorGroup;
  public specialities: ArlenorSpeciality[];
  public caracts: ArlenorEnum[];
  public effect: string;

  public get isGrpSpeSkill():boolean {
    if (this.typeSkill) {
      return (this.typeSkill === SkillsEnum.CompetenceArme
        || this.typeSkill === SkillsEnum.CompetenceArmure
        || this.typeSkill === SkillsEnum.TempsIncantation
        || this.typeSkill === SkillsEnum.TempsRechargement);
    }
    return false;
  }

  constructor(name: string, typeSkill: ArlenorEnum, group: ArlenorGroup | null, specialities: ArlenorSpeciality[]) {
    this.name = name;
    this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar justo a facilisis aliquet.";
    this.image = "";
    this.typeSkill = typeSkill;
    this.group = (group ? group : specialities[0].group);
    this.specialities = specialities;
    this.caracts = [];
    this.effect = "";

    this.setImage();
  }

  public setImage(): void {
    if (this.typeSkill.Code === SkillsEnum.CompetenceArme.Code) {
      this.image = require("./../assets/icons/armes.png");
    }
    else if (this.typeSkill.Code === SkillsEnum.CompetenceArmure.Code) {
      this.image = require("./../assets/icons/armures.png");
    }
    else if (this.typeSkill.Code === SkillsEnum.TempsIncantation.Code) {
      this.image = require("./../assets/icons/incantation.png");
    }
    else if (this.typeSkill.Code === SkillsEnum.TempsRechargement.Code) {
      this.image = require("./../assets/icons/rechargement.png");
    }
  }
}

export class SkillsEnum {
  // Compétences de groupe/classe et de spécialité
  static CompetenceArme: ArlenorEnum = { Code: "COMP_ARME", Libelle: "Compétence d'arme" };
  static CompetenceArmure: ArlenorEnum = { Code: "COMP_ARMURE", Libelle: "Compétence d'armure" };
  static TempsRechargement: ArlenorEnum = { Code: "TEMPS_RECH", Libelle: "Temps de rechargement" };
  static TempsIncantation: ArlenorEnum = { Code: "TEMPS_INC", Libelle: "Temps d'incantation" };

  // Compétences à choisir
  static CompetenceSpeBonus: ArlenorEnum = { Code: "SPE_BONUS", Libelle: "Compétence spéciale Bonus sur soi" };
  static CompetenceSpeMalus: ArlenorEnum = { Code: "SPE_MALUS", Libelle: "Compétence spéciale Malus sur soi" };
  static CompetenceSpeAttaque: ArlenorEnum = { Code: "SPE_ATK", Libelle: "Compétence spéciale d'Attaque" };
  static SortOffensif: ArlenorEnum = { Code: "SORT_OFF", Libelle: "Sort offensif" };
  static SortDefensif: ArlenorEnum = { Code: "SORT_DEF", Libelle: "Sort défensif" };
  static SortDivers: ArlenorEnum = { Code: "SORT_DIVERS", Libelle: "Sort divers" };
}
