import { CaractEnum } from "./ArlenorCharacter";
import { ArlenorEnum } from "./ArlenorEnum";
import { ArlenorGroup } from "./ArlenorGroup";
import { ArlenorSpeciality } from "./ArlenorSpeciality";
import { ArlenorGroups, getListGroups } from "./data/ListGroups";
import { getListSpecialities } from "./data/ListSpecialities";

export interface ArlenorSkillJSON {
  name: string;
  description: string;
  image: string;
  typeSkill: string;
  group: string;
  speciality: string;
  level: string;
  timeCasting: string;
  timeReloading: string;
  caractsUse: string;
  caractsTarget: string;
  effect: string;
  effect0: string;
  effect1: string;
  effect2: string;
  effect3: string;
}

export class ArlenorSkill {
  public name: string;
  public description: string;
  public typeSkill: ArlenorEnum;
  public image: string;
  public group: ArlenorGroup;
  public speciality: ArlenorSpeciality | null;
  public level: number;
  public timeCasting: number;
  public timeReloading: number;
  public caractsUse: ArlenorEnum[];
  public caractsTarget: ArlenorEnum[];
  public effect: string;
  public effect0: string;
  public effect1: string;
  public effect2: string;
  public effect3: string;

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
    this.speciality = null;
    this.level = 0;
    this.timeCasting = 0;
    this.timeReloading = 0;
    this.caractsUse = [];
    this.caractsTarget = [];
    this.effect = "";
    this.effect0 = "";
    this.effect1 = "";
    this.effect2 = "";
    this.effect3 = "";
  }

  public static ConvertSkill(skillJSON: ArlenorSkillJSON): ArlenorSkill {
    const arlSkill = new ArlenorSkill();
    arlSkill.name = skillJSON.name;
    arlSkill.description = skillJSON.description;
    arlSkill.setType(skillJSON.typeSkill);
    arlSkill.setImage(skillJSON.image);
    arlSkill.setGroupAndSpeciality(skillJSON.group, skillJSON.speciality);
    arlSkill.level = parseInt(skillJSON.level);
    arlSkill.timeCasting = parseInt(skillJSON.timeCasting);
    arlSkill.timeReloading = parseInt(skillJSON.timeReloading);
    arlSkill.setCaractsUse(skillJSON.caractsUse);
    arlSkill.setCaractsTarget(skillJSON.caractsTarget);
    arlSkill.effect = "";
    arlSkill.effect0 = "";
    arlSkill.effect1 = "";
    arlSkill.effect2 = "";
    arlSkill.effect3 = "";
    return arlSkill;
  }

  public setType(code: string): void {
    if (code === SkillsEnum.CompetencePassive.Code) this.typeSkill = SkillsEnum.CompetencePassive;
    else if (code === SkillsEnum.CompetenceSpeciale.Code) this.typeSkill = SkillsEnum.CompetenceSpeciale;
    else if (code === SkillsEnum.SortOffensif.Code) this.typeSkill = SkillsEnum.SortOffensif;
    else if (code === SkillsEnum.SortDefensif.Code) this.typeSkill = SkillsEnum.SortDefensif;
    else if (code === SkillsEnum.SortDivers.Code) this.typeSkill = SkillsEnum.SortDivers;
    else console.error("ConvertSkill : typeSkill n'est pas reconnu : |" + code + "|");
  }

  public setImage(name: string | null = null): void {
    if (name) this.image = require("./../assets/icons/"+ name +".png");
    else if (this.typeSkill.Code === SkillsEnum.CompetencePassive.Code) {
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

  public setGroupAndSpeciality(grpCode: string, speCode: string): void {
    if (grpCode) {
      const group = getListGroups().find(grp => grp.code === grpCode.toUpperCase());
      if (group) this.group = group;
      else console.error("ConvertSkill : group n'est pas reconnu : |" + grpCode + "|");
    }
    else if (speCode) {
      const speciality = getListSpecialities().find(spe => spe.code === speCode.toUpperCase());
      if (speciality) {
        this.speciality = speciality;
        this.group = speciality.group;
      }
      else console.error("ConvertSkill : speciality n'est pas reconnu : |" + speCode + "|");
    }
  }

  public setCaractsUse(codes: string): void {
    const listCodes = codes.split(",");
    listCodes.forEach(code => {
      if (code.indexOf(CaractEnum.Vigueur.Code) !== -1) this.caractsUse.push(CaractEnum.Vigueur);
      else if (code.indexOf(CaractEnum.Habilete.Code) !== -1) this.caractsUse.push(CaractEnum.Habilete);
      else if (code.indexOf(CaractEnum.Intellect.Code) !== -1) this.caractsUse.push(CaractEnum.Intellect);
      else if (code.indexOf(CaractEnum.Charisme.Code) !== -1) this.caractsUse.push(CaractEnum.Charisme);
      else if (code.indexOf(CaractEnum.Pouvoir.Code) !== -1) this.caractsUse.push(CaractEnum.Pouvoir);
      else if (code.indexOf(CaractEnum.Aucune.Code) !== -1) this.caractsUse.push(CaractEnum.Aucune);
      else console.error("ConvertSkill : caractsUse n'est pas reconnu : |" + code + "|");
    });
  }

  public setCaractsTarget(codes: string): void {
    const listCodes = codes.split(",");
    listCodes.forEach(code => {
      if (code.indexOf(CaractEnum.Vigueur.Code) !== -1) this.caractsTarget.push(CaractEnum.Vigueur);
      else if (code.indexOf(CaractEnum.Habilete.Code) !== -1) this.caractsTarget.push(CaractEnum.Habilete);
      else if (code.indexOf(CaractEnum.Intellect.Code) !== -1) this.caractsTarget.push(CaractEnum.Intellect);
      else if (code.indexOf(CaractEnum.Charisme.Code) !== -1) this.caractsTarget.push(CaractEnum.Charisme);
      else if (code.indexOf(CaractEnum.Pouvoir.Code) !== -1) this.caractsTarget.push(CaractEnum.Pouvoir);
      else if (code.indexOf(CaractEnum.Aucune.Code) !== -1) this.caractsTarget.push(CaractEnum.Aucune);
      else console.error("ConvertSkill : caractsTarget n'est pas reconnu : |" + code + "|");
    });
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
