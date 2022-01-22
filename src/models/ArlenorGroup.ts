import { ArlenorEnum } from "./ArlenorEnum";

export class ArlenorGroup {
  public name: string;
  public role: RoleEnum;
  public image: string;
  public description: string;

  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }

  constructor(name: string, role: RoleEnum) {
    this.name = name;
    this.role = role;
    this.image = require("./../assets/icons-skills/group.png");
    this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar justo a facilisis aliquet. In justo libero, tempor a ipsum id, pellentesque semper est. Nam elit ex, pulvinar eu libero nec, sagittis fringilla lorem. Curabitur consequat nulla elit, nec tincidunt risus rhoncus vitae. In hac habitasse platea dictumst.";
  }
}

export class ArlenorGroups {
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
  const arlenorGroups = new ArlenorGroups();
  return Object.values(arlenorGroups);
}
