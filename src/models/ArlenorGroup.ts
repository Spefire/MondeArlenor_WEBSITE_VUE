import { ArlenorRole, ArlenorRoles } from "./ArlenorRole";

export class ArlenorGroup {
  public name: string;
  public role: ArlenorRole;
  public image: string;
  public description: string;

  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }

  constructor(name: string, role: ArlenorRole) {
    this.name = name;
    this.role = role;
    this.image = require("./../assets/icons/group.png");
    this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar justo a facilisis aliquet. In justo libero, tempor a ipsum id, pellentesque semper est. Nam elit ex, pulvinar eu libero nec, sagittis fringilla lorem. Curabitur consequat nulla elit, nec tincidunt risus rhoncus vitae. In hac habitasse platea dictumst.";
  }
}

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
