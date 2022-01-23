export class ArlenorRole {
  public name: string;
  public icon: string;

  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }

  constructor(name: string, icon: string) {
    this.name = name;
    this.icon = icon;
  }
}

export class ArlenorRoles {
  public Tank: ArlenorRole;
  public DPSPhysique: ArlenorRole;
  public DPSMagique: ArlenorRole;
  public Soutien: ArlenorRole;

  constructor() {
    this.Tank = new ArlenorRole("Tank", "icon-shield text-cyan");
    this.DPSPhysique = new ArlenorRole("DPS Physique", "icon-power text-red");
    this.DPSMagique = new ArlenorRole("DPS Magique", "icon-star-full text-yellow");
    this.Soutien = new ArlenorRole("Soutien", "icon-heart text-green");
  }
}

export function getListRoles(): ArlenorRole[] {
  const arlenorRoles = new ArlenorRoles();
  return Object.values(arlenorRoles);
}
