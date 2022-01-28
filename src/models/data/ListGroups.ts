import { ArlenorGroup } from "../ArlenorGroup";
import { ArlenorRoles } from "./ListRoles";

export class ArlenorGroups {
  public Gardien: ArlenorGroup;
  public Moine: ArlenorGroup;
  public Assassin: ArlenorGroup;
  public Bretteur: ArlenorGroup;
  public Sorcier: ArlenorGroup;
  public Invocateur: ArlenorGroup;
  public Enchanteur: ArlenorGroup;
  public Druide: ArlenorGroup;
  public Pretre: ArlenorGroup;
  public Barde: ArlenorGroup;

  constructor() {
    const roles = new ArlenorRoles();

    this.Gardien = new ArlenorGroup("Gardien", roles.Tank);
    this.Moine = new ArlenorGroup("Moine", roles.Tank);

    this.Assassin = new ArlenorGroup("Assassin", roles.DPSPhysique);
    this.Bretteur = new ArlenorGroup("Bretteur", roles.DPSPhysique);
    
    this.Sorcier = new ArlenorGroup("Sorcier", roles.DPSMagique);
    this.Invocateur = new ArlenorGroup("Invocateur", roles.DPSMagique);
    this.Enchanteur = new ArlenorGroup("Enchanteur", roles.DPSMagique);

    this.Druide = new ArlenorGroup("Druide", roles.Soutien);
    this.Pretre = new ArlenorGroup("Prêtre", roles.Soutien);
    this.Barde = new ArlenorGroup("Barde", roles.Soutien);
  }
}

export function getListGroups(): ArlenorGroup[] {
  const arlenorGroups = new ArlenorGroups();
  return Object.values(arlenorGroups);
}
