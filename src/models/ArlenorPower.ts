import { ArlenorAPI } from "./ArlenorAPI";
import { ArlenorEnum, getEnumByCode } from "./ArlenorEnum";
import { ArlenorSpeciality } from "./ArlenorSpeciality";
import { ArlenorSpecialities } from "./data/ListSpecialities";

export class ArlenorPower extends ArlenorAPI {

  // Variables à sauvegarder
  public isVerified: boolean;
  public name: string;
  public description: string;
  public codeType: string;
  public codeSpeciality: string;
  public codeRank: string;
  public codeRange: string;
  public codeDuration: string;
  public chaneling: boolean;
  
  // Variables dérivées
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

  get speciality(): ArlenorSpeciality {
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
    const specialities = new ArlenorSpecialities();
    this.isVerified = false;

    this.name = "";
    this.description = "";
    this.codeType = PowerTypesEnum.Attack.Code;
    this.codeSpeciality = specialities.Gardien.code;

    this.codeRank = PowerRanksEnum.Commun.Code;
    this.codeRange = PowerRangesEnum.Personnelle.Code;
    this.codeDuration = PowerDurationsEnum.Instantanee.Code;
    this.chaneling = false;
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
