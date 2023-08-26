import { ArlenorAPI } from "./ArlenorAPI";
import { ArlenorEnum, getEnumByCode } from "./ArlenorEnum";

export class ArlenorStuff extends ArlenorAPI {

  // Variables à sauvegarder
  public name: string;
  public description: string;
  public urlImage: string;
  public codeType: string;
  public codesCaracts: string[];
  
  // Variables dérivées
  get image(): string | null {
    if (this.codeType === StuffTypesEnum.Weapon.Code) return require("./../assets/icons/skills/weapon.png");
    else if (this.type.Code === StuffTypesEnum.Armor.Code) return require("./../assets/icons/skills/armor.png");
    return null;
  }

  get type(): ArlenorEnum {
    return getEnumByCode(this.codeType, StuffTypesEnum);
  }

  get nameCaracts(): string {
    let results = "";
    this.codesCaracts.forEach((codeCaracts, index) => {
      if (index) results += ", ";
      results += codeCaracts;
    });
    return results ? results : "Aucune caractéristique";
  }

  constructor() {
    super();
    this.name = "";
    this.description = "";
    this.urlImage = "";

    this.codeType = StuffTypesEnum.Weapon.Code;
    this.codesCaracts = [];
  }

  public init(name: string, type: ArlenorEnum): void {
    this.name = name;
    this.codeType = type.Code;
  }
}

export class StuffTypesEnum {
  static Weapon: ArlenorEnum = { Code: "WEAPON", Libelle: "Arme" };
  static Armor: ArlenorEnum = { Code: "ARMOR", Libelle: "Armure" };
}
