import { ArlenorGroup, ArlenorListGroups } from "./ArlenorGroup";

export class ArlenorClass {
  public name: string;
  public description: string;
  public arlenorGroup: ArlenorGroup;

  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }

  constructor(name: string, arlenorGroup: ArlenorGroup) {
    this.name = name;
    this.description = "";
    this.arlenorGroup = arlenorGroup;
  }
}

export class ArlenorListClasses {
  public Paladin: ArlenorClass;
  public Chevalier: ArlenorClass;
  public DanseurMartial: ArlenorClass;
  public Derviche: ArlenorClass;
  public LameOmbre: ArlenorClass;
  public Chasseur: ArlenorClass;
  public DanseurSabre: ArlenorClass;
  public DoubleLame: ArlenorClass;
  public Escrimeur: ArlenorClass;

  constructor() {
    const groups = new ArlenorListGroups();

    this.Paladin = new ArlenorClass("Paladin", groups.Gardien);
    this.Chevalier = new ArlenorClass("Chevalier", groups.Gardien);

    this.DanseurMartial = new ArlenorClass("Danseur Martial", groups.Moine);
    this.Derviche = new ArlenorClass("Derviche", groups.Moine);

    this.LameOmbre = new ArlenorClass("Lame de l'Ombre", groups.Assassin);
    this.Chasseur = new ArlenorClass("Chasseur", groups.Assassin);
    this.DanseurSabre = new ArlenorClass("Danseur au Sabre", groups.Assassin);
    
    this.DoubleLame = new ArlenorClass("Double Lame", groups.Bretteur);
    this.Escrimeur = new ArlenorClass("Escrimeur", groups.Bretteur);
  }
}

export function getListClasses(): ArlenorClass[] {
  const arlenorListClasses = new ArlenorListClasses();
  return Object.values(arlenorListClasses);
}
