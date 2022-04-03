import { ArlenorEnum } from "./ArlenorEnum";
import { ArlenorGroup } from "./ArlenorGroup";
import { ArlenorSpeciality } from "./ArlenorSpeciality";
import { ArlenorGroups } from "./data/ListGroups";

export interface ArlenorSkillJSON {
  name: string;
  description: string;
  image: string;
  typeSkill: string;
  group: string;
  specialities: string;
  level: string;
  caracts: string;
  timeCasting: string;
  timeReloading: string;
}

export class ArlenorSkill {
  public name: string;
  public description: string;
  public typeSkill: ArlenorEnum;
  public image: string;
  public group: ArlenorGroup;
  public specialities: ArlenorSpeciality[];
  public level: number;
  public caracts: ArlenorEnum[];
  public timeCasting: number;
  public timeReloading: number;

  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }

  constructor() {
    const groups = new ArlenorGroups();
    this.name = "";
    this.description = "";
    this.typeSkill = SkillsEnum.CompetencePassive;
    this.image = "";
    this.group = groups.Assassin;
    this.specialities = [];
    this.level = 0;
    this.timeCasting = 0;
    this.timeReloading = 0;
    this.caracts = [];
  }

  public static CreateSkill(name: string, typeSkill: ArlenorEnum, group: ArlenorGroup | null, specialities: ArlenorSpeciality[], level: number,
    timeCasting: number,  timeReloading: number, description = ""): ArlenorSkill {
    const arlSkill = new ArlenorSkill();
    arlSkill.name = name;
    arlSkill.description = description;
    arlSkill.typeSkill = typeSkill;
    arlSkill.setImage();
    arlSkill.group = (group ? group : specialities[0].group);
    arlSkill.specialities = specialities;
    arlSkill.level = level;
    arlSkill.timeCasting = timeCasting;
    arlSkill.timeReloading = timeReloading;
    arlSkill.caracts = [];
    return arlSkill;
  }

  public static ConvertSkill(skillJSON: ArlenorSkillJSON): ArlenorSkill {
    const arlSkill = new ArlenorSkill();
    arlSkill.name = skillJSON.name;
    arlSkill.description = skillJSON.description;
    // arlSkill.typeSkill = skillJSON.typeSkill;
    arlSkill.setImage();
    // arlSkill.group = (group ? group : specialities[0].group);
    // arlSkill.specialities = specialities;
    arlSkill.level = parseInt(skillJSON.level);
    arlSkill.timeCasting = parseInt(skillJSON.timeCasting);
    arlSkill.timeReloading = parseInt(skillJSON.timeReloading);
    // arlSkill.caracts = [];
    return arlSkill;
  }

  public setImage(): void {
    if (this.typeSkill.Code === SkillsEnum.CompetencePassive.Code) {
      this.image = require("./../assets/icons/comp_passive.png");
    }
    else if (this.typeSkill.Code === SkillsEnum.CompetenceSpeciale.Code) {
      this.image = require("./../assets/icons/comp_speciale.png");
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
  static CompetencePassive: ArlenorEnum = { Code: "COMP_PASS", Libelle: "Compétence passive" };
  static CompetenceSpeciale: ArlenorEnum = { Code: "COMP_SPE", Libelle: "Compétence spéciale" };
  static SortOffensif: ArlenorEnum = { Code: "SORT_OFF", Libelle: "Sort offensif" };
  static SortDefensif: ArlenorEnum = { Code: "SORT_DEF", Libelle: "Sort défensif" };
  static SortDivers: ArlenorEnum = { Code: "SORT_DIVERS", Libelle: "Sort divers" };
}
