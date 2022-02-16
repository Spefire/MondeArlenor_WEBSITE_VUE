import { ArlenorRole } from "../ArlenorRole";

export class ArlenorRoles {
  public Tank: ArlenorRole;
  public DPSPhysique: ArlenorRole;
  public DPSMagique: ArlenorRole;
  public Soutien: ArlenorRole;

  constructor() {
    this.Tank = new ArlenorRole("Tank", "icon-shield");
    this.DPSPhysique = new ArlenorRole("DPS Physique", "icon-power");
    this.DPSMagique = new ArlenorRole("DPS Magique", "icon-star-full");
    this.Soutien = new ArlenorRole("Soutien", "icon-heart");
  }
}

export function getListRoles(): ArlenorRole[] {
  const arlenorRoles = new ArlenorRoles();
  return Object.values(arlenorRoles);
}
