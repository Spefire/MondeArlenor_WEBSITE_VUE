import { ArlenorEnum } from "./ArlenorEnum";
import { ArlenorGroup } from "./ArlenorGroup";
import { ArlenorSpeciality } from "./ArlenorSpeciality";
import { ArlenorGroups, getListGroups } from "./data/ListGroups";
import { getListSpecialities } from "./data/ListSpecialities";

export class ArlenorPower {
  public id = "";
  public hour = "00:00";
  public date = "01/01/1990";

  public name: string;
  public description: string;
  public type: ArlenorEnum;
  public image: string;
  public group: ArlenorGroup;
  public speciality: ArlenorSpeciality | null;

  public level: number;
  public range: ArlenorEnum;
  public duration: ArlenorEnum;
  public chaneling: boolean;
  public targets: ArlenorEnum;
    
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
    this.type = PowerTypesEnum.CompetenceSpeciale;
    this.image = "";
    this.group = groups.Assassin;
    this.speciality = null;

    this.level = 0;
    this.range = PowerRangesEnum.Personnelle;
    this.duration = PowerDurationsEnum.Instantanee;
    this.chaneling = false;
    this.targets = PowerTargetsEnum.Aucune;
  }

  public setGroupAndSpeciality(grpCode: string, speCode: string): void {
    if (grpCode) {
      const group = getListGroups().find(grp => grp.code === grpCode.toUpperCase());
      if (group) this.group = group;
      // else console.error("ConvertPower : group n'est pas reconnu : |" + grpCode + "|");
    }
    else if (speCode) {
      const speciality = getListSpecialities().find(spe => spe.code === speCode.toUpperCase());
      if (speciality) {
        this.speciality = speciality;
        this.group = speciality.group;
      }
      // else console.error("ConvertPower : speciality n'est pas reconnu : |" + speCode + "|");
    }
  }
  
  public setType(code: string): void {
    if (code === PowerTypesEnum.CompetenceSpeciale.Code) this.type = PowerTypesEnum.CompetenceSpeciale;
    else if (code === PowerTypesEnum.SortOffensif.Code) this.type = PowerTypesEnum.SortOffensif;
    else if (code === PowerTypesEnum.SortDefensif.Code) this.type = PowerTypesEnum.SortDefensif;
    else if (code === PowerTypesEnum.SortUtilitaire.Code) this.type = PowerTypesEnum.SortUtilitaire;
    // else console.error("ConvertPower : type n'est pas reconnu : |" + code + "|");
  }

  public setImage(): void {
    if (this.speciality) {
      this.image = require("./../assets/icons/powers/power_spe.png");
    }
    else if (this.group) {
      this.image = require("./../assets/icons/powers/power_grp.png");
    }
  }

  public setRange(code: string): void {
    if (code === PowerRangesEnum.Personnelle.Code) this.type = PowerRangesEnum.Personnelle;
    else if (code === PowerRangesEnum.Toucher.Code) this.type = PowerRangesEnum.Toucher;
    else if (code === PowerRangesEnum.Vue.Code) this.type = PowerRangesEnum.Vue;
    else if (code === PowerRangesEnum.Infinie.Code) this.type = PowerRangesEnum.Infinie;
    // else console.error("ConvertRange : range n'est pas reconnu : |" + code + "|");
  }

  public setDuration(code: string): void {
    if (code === PowerDurationsEnum.Instantanee.Code) this.type = PowerDurationsEnum.Instantanee;
    else if (code === PowerDurationsEnum.Scene.Code) this.type = PowerDurationsEnum.Scene;
    else if (code === PowerDurationsEnum.Journee.Code) this.type = PowerDurationsEnum.Journee;
    else if (code === PowerDurationsEnum.Illimitee.Code) this.type = PowerDurationsEnum.Illimitee;
    // else console.error("ConvertDuration : duration n'est pas reconnu : |" + code + "|");
  }

  public setTargets(code: string): void {
    if (code === PowerTargetsEnum.Aucune.Code) this.type = PowerTargetsEnum.Aucune;
    else if (code === PowerTargetsEnum.Unique.Code) this.type = PowerTargetsEnum.Unique;
    else if (code === PowerTargetsEnum.Foule.Code) this.type = PowerTargetsEnum.Foule;
    else if (code === PowerTargetsEnum.Monde.Code) this.type = PowerTargetsEnum.Monde;
    // else console.error("ConvertPower : targets n'est pas reconnu : |" + code + "|");
  }

  public initByJSON(value: string): void {
    const powerDB = JSON.parse(value);
    this.date = powerDB.date;
    this.hour = powerDB.hour;

    this.name = powerDB.name;
    this.description = powerDB.description;
    this.setGroupAndSpeciality(powerDB.group?.code, powerDB.speciality?.code);
    this.setType(powerDB.type?.code);
    this.setImage();

    if (powerDB.level) this.level = parseInt(powerDB.level);
    this.setRange(powerDB.range?.code);
    this.setDuration(powerDB.duration?.code);
    this.chaneling = powerDB.chaneling ? true : false;
    this.setTargets(powerDB.targets?.code);
  }

  public initTime(): void {
    function pad(s: number) { return (s < 10) ? "0" + s : s; }
    const date = new Date();
    const hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
    const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    this.hour = hours + ":" + minutes;
    this.date = [pad(date.getDate()), pad(date.getMonth()+1), date.getFullYear()].join("/");
  }
}

export class PowerTypesEnum {
  static CompetenceSpeciale: ArlenorEnum = { Code: "SPE", Libelle: "Compétence spéciale" };
  static SortOffensif: ArlenorEnum = { Code: "OFF", Libelle: "Sort offensif" };
  static SortDefensif: ArlenorEnum = { Code: "DEF", Libelle: "Sort défensif" };
  static SortUtilitaire: ArlenorEnum = { Code: "UTILE", Libelle: "Sort utilitaire" };
}

export class PowerRangesEnum {
  static Personnelle: ArlenorEnum = { Code: "0", Libelle: "Personnelle" };
  static Toucher: ArlenorEnum = { Code: "1", Libelle: "Toucher" };
  static Vue: ArlenorEnum = { Code: "2", Libelle: "A vue" };
  static Infinie: ArlenorEnum = { Code: "3", Libelle: "Infinie" };
}

export class PowerDurationsEnum {
  static Instantanee: ArlenorEnum = { Code: "0", Libelle: "Instantanée" };
  static Scene: ArlenorEnum = { Code: "1", Libelle: "Scène" };
  static Journee: ArlenorEnum = { Code: "2", Libelle: "Journée" };
  static Illimitee: ArlenorEnum = { Code: "3", Libelle: "Illimitée" };
}

export class PowerTargetsEnum {
  static Aucune: ArlenorEnum = { Code: "0", Libelle: "Aucune" };
  static Unique: ArlenorEnum = { Code: "1", Libelle: "Unique" };
  static Foule: ArlenorEnum = { Code: "2", Libelle: "Foule choisie" };
  static Monde: ArlenorEnum = { Code: "3", Libelle: "Tout le monde" };
}
