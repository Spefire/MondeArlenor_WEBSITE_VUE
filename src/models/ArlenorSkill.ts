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
  public level: number;
  public caracts: ArlenorEnum[];
  public effect: string;

  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }

  constructor(name: string, typeSkill: ArlenorEnum, group: ArlenorGroup | null, specialities: ArlenorSpeciality[], level: number, description = "") {
    this.name = name;
    this.description = description;
    this.image = "";
    this.typeSkill = typeSkill;
    this.group = (group ? group : specialities[0].group);
    this.specialities = specialities;
    this.level = level;
    this.caracts = [];
    this.effect = "";

    this.setImage();
  }

  public setImage(): void {
    if (this.typeSkill.Code === SkillsEnum.CompetenceSpeBonus.Code) {
      this.image = require("./../assets/icons/comp_bonus.png");
    }
    else if (this.typeSkill.Code === SkillsEnum.CompetenceSpeMalus.Code) {
      this.image = require("./../assets/icons/comp_malus.png");
    }
    else if (this.typeSkill.Code === SkillsEnum.CompetenceSpeAttaque.Code) {
      this.image = require("./../assets/icons/comp_attaque.png");
    }
    else if (this.typeSkill.Code === SkillsEnum.SortOffensif.Code) {
      this.image = require("./../assets/icons/sort_offensif.png");
    }
    else if (this.typeSkill.Code === SkillsEnum.SortDefensif.Code) {
      this.image = require("./../assets/icons/sort_defensif.png");
    }
    else if (this.typeSkill.Code === SkillsEnum.SortDivers.Code) {
      this.image = require("./../assets/icons/sort_divers.png");
    }
    else {
      this.image = require("./../assets/icons/skills.png");
    }
  }
}

export class SkillsEnum {
  // Compétences à choisir
  static CompetenceSpeBonus: ArlenorEnum = { Code: "SPE_BONUS", Libelle: "Compétence spéciale Bonus sur soi" };
  static CompetenceSpeMalus: ArlenorEnum = { Code: "SPE_MALUS", Libelle: "Compétence spéciale Malus sur soi" };
  static CompetenceSpeAttaque: ArlenorEnum = { Code: "SPE_ATK", Libelle: "Compétence spéciale d'Attaque" };
  static SortOffensif: ArlenorEnum = { Code: "SORT_OFF", Libelle: "Sort offensif" };
  static SortDefensif: ArlenorEnum = { Code: "SORT_DEF", Libelle: "Sort défensif" };
  static SortDivers: ArlenorEnum = { Code: "SORT_DIVERS", Libelle: "Sort divers" };
}
