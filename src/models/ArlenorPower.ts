import { CaractNomEnum } from "./ArlenorCharacter";
import { ArlenorEnum } from "./ArlenorEnum";
import { ArlenorGroup } from "./ArlenorGroup";
import { ArlenorSpeciality } from "./ArlenorSpeciality";
import { ArlenorGroups, getListGroups } from "./data/ListGroups";
import { getListSpecialities } from "./data/ListSpecialities";

export interface ArlenorPowerJSON {
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
  effect: string; // A supprimer
  effect0: string;
  effect1: string;
  effect2: string;
  effect3: string;
}

export class ArlenorPower {
  public name: string;
  public description: string;
  public type: ArlenorEnum;
  public image: string;
  public group: ArlenorGroup;
  public speciality: ArlenorSpeciality | null;
  public level: number;
  public timeCasting: number;
  public timeReloading: number;
  public caractsUse: ArlenorEnum[];
  public caractsTarget: ArlenorEnum[];
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
    this.type = PowersEnum.CompetenceSpeciale;
    this.image = "";
    this.group = groups.Assassin;
    this.speciality = null;
    this.level = 0;
    this.timeCasting = 0;
    this.timeReloading = 0;
    this.caractsUse = [];
    this.caractsTarget = [];
    this.effect0 = "";
    this.effect1 = "";
    this.effect2 = "";
    this.effect3 = "";
  }

  public static ConvertPower(value: ArlenorPowerJSON): ArlenorPower {
    const power = new ArlenorPower();
    power.name = value.name;
    power.description = value.description;
    power.setType(value.typeSkill);
    power.setGroupAndSpeciality(value.group, value.speciality);
    power.setImage();
    power.level = parseInt(value.level);
    power.timeCasting = parseInt(value.timeCasting);
    power.timeReloading = parseInt(value.timeReloading);
    power.setCaractsUse(value.caractsUse);
    power.setCaractsTarget(value.caractsTarget);
    power.effect0 = value.effect0;
    power.effect1 = value.effect1;
    power.effect2 = value.effect2;
    power.effect3 = value.effect3;
    return power;
  }

  public setType(code: string): void {
    if (code === PowersEnum.CompetenceSpeciale.Code) this.type = PowersEnum.CompetenceSpeciale;
    else if (code === PowersEnum.SortOffensif.Code) this.type = PowersEnum.SortOffensif;
    else if (code === PowersEnum.SortDefensif.Code) this.type = PowersEnum.SortDefensif;
    else if (code === PowersEnum.SortUtilitaire.Code) this.type = PowersEnum.SortUtilitaire;
    else console.error("ConvertPower : type n'est pas reconnu : |" + code + "|");
  }

  public setImage(): void {
    if (this.speciality) {
      this.image = require("./../assets/icons/powers/power_spe.png");
    }
    else if (this.group) {
      this.image = require("./../assets/icons/powers/power_grp.png");
    }
  }

  public setGroupAndSpeciality(grpCode: string, speCode: string): void {
    if (grpCode) {
      const group = getListGroups().find(grp => grp.code === grpCode.toUpperCase());
      if (group) this.group = group;
      else console.error("ConvertPower : group n'est pas reconnu : |" + grpCode + "|");
    }
    else if (speCode) {
      const speciality = getListSpecialities().find(spe => spe.code === speCode.toUpperCase());
      if (speciality) {
        this.speciality = speciality;
        this.group = speciality.group;
      }
      else console.error("ConvertPower : speciality n'est pas reconnu : |" + speCode + "|");
    }
  }

  public setCaractsUse(codes: string): void {
    const listCodes = codes.split(",");
    listCodes.forEach(code => {
      if (code.indexOf(CaractNomEnum.Force.Code) !== -1) this.caractsUse.push(CaractNomEnum.Force);
      else if (code.indexOf(CaractNomEnum.Habilete.Code) !== -1) this.caractsUse.push(CaractNomEnum.Habilete);
      else if (code.indexOf(CaractNomEnum.Intellect.Code) !== -1) this.caractsUse.push(CaractNomEnum.Intellect);
      else if (code.indexOf(CaractNomEnum.Tenacite.Code) !== -1) this.caractsUse.push(CaractNomEnum.Tenacite);
      else if (code.indexOf(CaractNomEnum.Charisme.Code) !== -1) this.caractsUse.push(CaractNomEnum.Charisme);
      else if (code.indexOf(CaractNomEnum.Magie.Code) !== -1) this.caractsUse.push(CaractNomEnum.Magie);
      else if (code.indexOf(CaractNomEnum.Aucune.Code) !== -1) this.caractsUse.push(CaractNomEnum.Aucune);
      else console.error("ConvertPower : caractsUse n'est pas reconnu : |" + code + "|");
    });
  }

  public setCaractsTarget(codes: string): void {
    const listCodes = codes.split(",");
    listCodes.forEach(code => {
      if (code.indexOf(CaractNomEnum.Force.Code) !== -1) this.caractsTarget.push(CaractNomEnum.Force);
      else if (code.indexOf(CaractNomEnum.Habilete.Code) !== -1) this.caractsTarget.push(CaractNomEnum.Habilete);
      else if (code.indexOf(CaractNomEnum.Intellect.Code) !== -1) this.caractsTarget.push(CaractNomEnum.Intellect);
      else if (code.indexOf(CaractNomEnum.Tenacite.Code) !== -1) this.caractsTarget.push(CaractNomEnum.Tenacite);
      else if (code.indexOf(CaractNomEnum.Charisme.Code) !== -1) this.caractsTarget.push(CaractNomEnum.Charisme);
      else if (code.indexOf(CaractNomEnum.Magie.Code) !== -1) this.caractsTarget.push(CaractNomEnum.Magie);
      else if (code.indexOf(CaractNomEnum.Aucune.Code) !== -1) this.caractsTarget.push(CaractNomEnum.Aucune);
      else console.error("ConvertPower : caractsTarget n'est pas reconnu : |" + code + "|");
    });
  }
}

export class PowersEnum {
  // Pouvoirs à choisir
  static CompetenceSpeciale: ArlenorEnum = { Code: "SPE", Libelle: "Compétence spéciale" };
  static SortOffensif: ArlenorEnum = { Code: "OFF", Libelle: "Sort offensif" };
  static SortDefensif: ArlenorEnum = { Code: "DEF", Libelle: "Sort défensif" };
  static SortUtilitaire: ArlenorEnum = { Code: "UTILE", Libelle: "Sort utilitaire" };
}
