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
  public codeTests: string;
  
  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }

  get image(): string | null {
    if (this.codeType === PowerTypesEnum.AnatomieSurhumaine.Code) return require("./../assets/icons/powers/anatomie_surhumaine.png");
    if (this.codeType === PowerTypesEnum.ArmeNaturelle.Code) return require("./../assets/icons/powers/arme_naturelle.png");
    if (this.codeType === PowerTypesEnum.ArmureNaturelle.Code) return require("./../assets/icons/powers/armure_naturelle.png");
    if (this.codeType === PowerTypesEnum.Chimerisme.Code) return require("./../assets/icons/powers/chimerisme.png");
    if (this.codeType === PowerTypesEnum.CoupSpecial.Code) return require("./../assets/icons/powers/coup_special.png");
    if (this.codeType === PowerTypesEnum.DeplacementSpatial.Code) return require("./../assets/icons/powers/deplacement_spatial.png");
    if (this.codeType === PowerTypesEnum.Immunite.Code) return require("./../assets/icons/powers/immunite.png");
    if (this.codeType === PowerTypesEnum.ManipulationTemps.Code) return require("./../assets/icons/powers/manipulation_temps.png");
    if (this.codeType === PowerTypesEnum.Metamorphose.Code) return require("./../assets/icons/powers/metamorphose.png");
    if (this.codeType === PowerTypesEnum.PerceptionSpecial.Code) return require("./../assets/icons/powers/perception_special.png");
    if (this.codeType === PowerTypesEnum.PouvoirMental.Code) return require("./../assets/icons/powers/pouvoir_mental.png");
    if (this.codeType === PowerTypesEnum.PouvoirSoin.Code) return require("./../assets/icons/powers/pouvoir_soin.png");
    if (this.codeType === PowerTypesEnum.RayonAttaque.Code) return require("./../assets/icons/powers/rayon_attaque.png");
    if (this.codeType === PowerTypesEnum.RayonProtection.Code) return require("./../assets/icons/powers/rayon_protection.png");
    if (this.codeType === PowerTypesEnum.RayonSpecial.Code) return require("./../assets/icons/powers/rayon_special.png");
    if (this.codeType === PowerTypesEnum.Spiritisme.Code) return require("./../assets/icons/powers/spiritisme.png");
    if (this.codeType === PowerTypesEnum.Transmutation.Code) return require("./../assets/icons/powers/transmutation.png");
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
  
  get tests(): ArlenorEnum {
    return getEnumByCode(this.codeTests, PowerTestsEnum);
  }

  constructor() {
    super();
    this.isVerified = false;

    this.name = "";
    this.description = "";
    this.codeType = PowerTypesEnum.AnatomieSurhumaine.Code;
    this.codeGroup = null;
    this.codeSpeciality = null;

    this.codeRank = PowerRanksEnum.Commun.Code;
    this.codeRange = PowerRangesEnum.Personnelle.Code;
    this.codeDuration = PowerDurationsEnum.Instantanee.Code;
    this.chaneling = false;
    this.codeTests = PowerTestsEnum.Aucune.Code;
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
    this.codeTests = powerDB.codeTests;
  }
}

export class PowerTypesEnum {
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

export class PowerTestsEnum {
  static Aucune: ArlenorEnum = { Code: "0", Libelle: "Aucun test" };
  static Difficulte: ArlenorEnum = { Code: "1", Libelle: "Test de difficulté" };
  static Opposition: ArlenorEnum = { Code: "2", Libelle: "Test en opposition" };
}
