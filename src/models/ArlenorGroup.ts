import { ArlenorEnum } from "./ArlenorEnum";

export class ArlenorGroup {
  public name: string;
  public role: RoleEnum;
  public description: string;

  constructor(name: string, role: RoleEnum) {
    this.name = name;
    this.role = role;
    this.description = "";
  }
}

export class ArlenorListGroups {
  public Gardien: ArlenorGroup;
  public Moine: ArlenorGroup;
  public Assassin: ArlenorGroup;
  public Bretteur: ArlenorGroup;

  constructor() {
    this.Gardien = new ArlenorGroup("Gardien", RoleEnum.Tank);
    this.Moine = new ArlenorGroup("Moine", RoleEnum.Tank);

    this.Assassin = new ArlenorGroup("Assassin", RoleEnum.DPSPhysique);
    this.Bretteur = new ArlenorGroup("Bretteur", RoleEnum.DPSPhysique);
  }
}

export class RoleEnum {
  static Tank: ArlenorEnum = { Code: "TANK", Libelle: "Tank" };
  static DPSPhysique: ArlenorEnum = { Code: "DPSPHYS", Libelle: "DPS Physique" };
  static DPSMagique: ArlenorEnum = { Code: "DPSMAG", Libelle: "DPS Magique" };
  static Soutien: ArlenorEnum = { Code: "SOUTIEN", Libelle: "Soutien" };
}

export function getListGroups(): ArlenorGroup[] {
  const arlenorListGroups = new ArlenorListGroups();
  return Object.values(arlenorListGroups);
}
