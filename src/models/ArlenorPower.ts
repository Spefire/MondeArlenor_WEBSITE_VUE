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
    if (this.codeType === PowerTypesEnum.Offensive.Code) return require("./../assets/icons/powers/offensive.png");
    if (this.codeType === PowerTypesEnum.Defensive.Code) return require("./../assets/icons/powers/defensive.png");
    if (this.codeType === PowerTypesEnum.Utility.Code) return require("./../assets/icons/powers/utility.png");
    if (this.codeType === PowerTypesEnum.Alteration.Code) return require("./../assets/icons/powers/alteration.png");
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
    this.codeType = PowerTypesEnum.Offensive.Code;
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

    if (this.codeType === PowerTypesEnum.CoupSpecial.Code
      || this.codeType === PowerTypesEnum.RayonAttaque.Code) {
      this.codeType = PowerTypesEnum.Offensive.Code;
    }

    if (this.codeType === PowerTypesEnum.Immunite.Code
      || this.codeType === PowerTypesEnum.ArmureNaturelle.Code
      || this.codeType === PowerTypesEnum.PouvoirSoin.Code
      || this.codeType === PowerTypesEnum.RayonProtection.Code) {
      this.codeType = PowerTypesEnum.Defensive.Code;
    }

    if (this.codeType === PowerTypesEnum.Chimerisme.Code
      || this.codeType === PowerTypesEnum.DeplacementSpatial.Code
      || this.codeType === PowerTypesEnum.ManipulationTemps.Code
      || this.codeType === PowerTypesEnum.PerceptionSpecial.Code
      || this.codeType === PowerTypesEnum.RayonSpecial.Code
      || this.codeType === PowerTypesEnum.Spiritisme.Code) {
      this.codeType = PowerTypesEnum.Utility.Code;
    }

    if (this.codeType === PowerTypesEnum.AnatomieSurhumaine.Code
      || this.codeType === PowerTypesEnum.ArmeNaturelle.Code
      || this.codeType === PowerTypesEnum.Metamorphose.Code
      || this.codeType === PowerTypesEnum.PouvoirMental.Code
      || this.codeType === PowerTypesEnum.Transmutation.Code) {
      this.codeType = PowerTypesEnum.Alteration.Code;
    }

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
  static Offensive: ArlenorEnum = { Code: "OFF", Libelle: "Pouvoir Offensif" };
  static Defensive: ArlenorEnum = { Code: "DEF", Libelle: "Pouvoir Défensif" };
  static Utility: ArlenorEnum = { Code: "UTIL", Libelle: "Pouvoir Utilitaire" };
  static Alteration: ArlenorEnum = { Code: "ALT", Libelle: "Pouvoir d'Altération" };

  static AnatomieSurhumaine: ArlenorEnum = { Code: "ANATOMIE", Libelle: "Anatomie surhumaine" };
  static ArmeNaturelle: ArlenorEnum = { Code: "ARME_NAT", Libelle: "Arme naturelle" };
  static ArmureNaturelle: ArlenorEnum = { Code: "ARMURE_NAT", Libelle: "Armure naturelle" };
  static Chimerisme: ArlenorEnum = { Code: "CHIMERISME", Libelle: "Chimérisme" };
  static CoupSpecial: ArlenorEnum = { Code: "COUP_SPE", Libelle: "Coup spécial" };
  static DeplacementSpatial: ArlenorEnum = { Code: "DEP_SPATIAL", Libelle: "Déplacement spatial" };
  static Immunite: ArlenorEnum = { Code: "IMMUNITE", Libelle: "Immunité" };
  static ManipulationTemps: ArlenorEnum = { Code: "MANIP_TEMPS", Libelle: "Manipulation temporelle" };
  static Metamorphose: ArlenorEnum = { Code: "METAMORPHOSE", Libelle: "Métamorphose" };
  static PerceptionSpecial: ArlenorEnum = { Code: "PERCEPTION", Libelle: "Perception spéciale" };
  static PouvoirMental: ArlenorEnum = { Code: "POUV_MENTAL", Libelle: "Pouvoir mental" };
  static PouvoirSoin: ArlenorEnum = { Code: "POUV_SOIN", Libelle: "Pouvoir de soin" };
  static RayonAttaque: ArlenorEnum = { Code: "RAYON_ATK", Libelle: "Rayonnement d'attaque" };
  static RayonProtection: ArlenorEnum = { Code: "RAYON_DEF", Libelle: "Rayonnement de protection" };
  static RayonSpecial: ArlenorEnum = { Code: "RAYON_SPE", Libelle: "Rayonnement spécial" };
  static Spiritisme: ArlenorEnum = { Code: "SPIRITISME", Libelle: "Spiritisme" };
  static Transmutation: ArlenorEnum = { Code: "TRANSMUTATION", Libelle: "Transmutation" };
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
