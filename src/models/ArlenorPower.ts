import { ArlenorAPI } from "./ArlenorAPI";
import { ArlenorEnum, getEnumByCode } from "./ArlenorEnum";
import { ArlenorGroup } from "./ArlenorGroup";
import { ArlenorSpeciality } from "./ArlenorSpeciality";
import { ArlenorGroups } from "./data/ListGroups";
import { ArlenorSpecialities } from "./data/ListSpecialities";

export class ArlenorPower extends ArlenorAPI {

  public isVerified: boolean;

  public name: string;
  public description: string;
  public codeType: string;
  public codeGroup: string | null;
  public codeSpeciality: string | null;

  public codeRank: string;
  public codeRange: string;
  public codeDuration: string;
  public chaneling: boolean;
  
  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }

  get image(): string | null {
    if (this.codeType === PowerTypesEnum.Attack.Code) return require("./../assets/icons/powers/attack.png");
    if (this.codeType === PowerTypesEnum.Defense.Code) return require("./../assets/icons/powers/defense.png");
    if (this.codeType === PowerTypesEnum.Heal.Code) return require("./../assets/icons/powers/heal.png");
    if (this.codeType === PowerTypesEnum.Control.Code) return require("./../assets/icons/powers/control.png");
    if (this.codeType === PowerTypesEnum.Utility.Code) return require("./../assets/icons/powers/utility.png");
    return null;
  }

  get type(): ArlenorEnum {
    return getEnumByCode(this.codeType, PowerTypesEnum);
  }

  get group(): ArlenorGroup | null {
    if (!this.codeGroup) return null;
    return ArlenorGroups.getGroup(this.codeGroup);
  }

  get speciality(): ArlenorSpeciality | null {
    if (!this.codeSpeciality) return null;
    return ArlenorSpecialities.getSpeciality(this.codeSpeciality);
  }

  get rank(): ArlenorEnum {
    return getEnumByCode(this.codeRank, PowerRanksEnum);
  }

  get range(): ArlenorEnum {
    return getEnumByCode(this.codeRange, PowerRangesEnum);
  }
  
  get duration(): ArlenorEnum {
    return getEnumByCode(this.codeDuration, PowerDurationsEnum);
  }
  
  constructor() {
    super();
    this.isVerified = false;

    this.name = "";
    this.description = "";
    this.codeType = PowerTypesEnum.Attack.Code;
    this.codeGroup = null;
    this.codeSpeciality = null;

    this.codeRank = PowerRanksEnum.Commun.Code;
    this.codeRange = PowerRangesEnum.Personnelle.Code;
    this.codeDuration = PowerDurationsEnum.Instantanee.Code;
    this.chaneling = false;
  }

  public initByJSON(value: string): void {
    const powerDB = JSON.parse(value);
    this.date = powerDB.date;
    this.hour = powerDB.hour;
    this.isVerified = powerDB.isVerified ? true : false;

    this.name = powerDB.name;
    this.description = powerDB.description;
    this.codeType = powerDB.codeType;

    if (powerDB.codeSpeciality) {
      this.codeGroup = null;
      this.codeSpeciality = powerDB.codeSpeciality;
    } else if (powerDB.codeGroup) {
      this.codeGroup = powerDB.codeGroup;
      this.codeSpeciality = null;
    }

    this.codeRank = powerDB.codeRank;
    this.codeRange = powerDB.codeRange;
    this.codeDuration = powerDB.codeDuration;
    this.chaneling = powerDB.chaneling ? true : false;
  }
}

export class PowerTypesEnum {
  // Attaque - Pouvoirs qui infligent des dégâts directs aux ennemis.
  // Défense - Pouvoirs qui protègent le lanceur ou ses alliés.
  // Soin - Pouvoirs de guérison pour restaurer les points de vie.
  // Contrôle - Pouvoirs qui entravent les ennemis ou modifient leurs actions.
  // Utilitaire - Pouvoirs non-combattifs pour diverses situations.

  static Attack: ArlenorEnum = { Code: "OFF", Libelle: "Pouvoir d'Attaque" };
  static Defense: ArlenorEnum = { Code: "DEF", Libelle: "Pouvoir de Défense" };
  static Heal: ArlenorEnum = { Code: "HEAL", Libelle: "Pouvoir de Soin" };
  static Control: ArlenorEnum = { Code: "CTRL", Libelle: "Pouvoir de Contrôle" };
  static Utility: ArlenorEnum = { Code: "UTIL", Libelle: "Pouvoir Utilitaire" };
}

export class PowerRanksEnum {
  static Unique: ArlenorEnum = { Code: "S", Libelle: "X" };
  static TresRare: ArlenorEnum = { Code: "A", Libelle: "III" };
  static Rare: ArlenorEnum = { Code: "B", Libelle: "II" };
  static Commun: ArlenorEnum = { Code: "C", Libelle: "I" };
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
