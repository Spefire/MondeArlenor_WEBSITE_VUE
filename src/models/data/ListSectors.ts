import { ArlenorSector } from "../ArlenorSector";

export class ArlenorSectors {
  public PlainesTerfil: ArlenorSector;
  public DesertSanderten: ArlenorSector;
  public ForetImerys: ArlenorSector;
  public ForetMiryden: ArlenorSector;
  public MontagnesKazador: ArlenorSector;
  public MontagnesHabivel: ArlenorSector;
  public MerShivazen: ArlenorSector;

  constructor() {
    this.PlainesTerfil = new ArlenorSector("Les Plaines de Terfil", "Paisible", "Tempéré");
    this.DesertSanderten = new ArlenorSector("Le Désert de Sanderten", "Risqué", "Désertique");
    this.ForetImerys = new ArlenorSector("La Forêt d'Imerys", "Risqué", "Tempéré");
    this.ForetMiryden = new ArlenorSector("La Forêt de Miryden", "Mortel", "Tropical");
    this.MontagnesKazador = new ArlenorSector("Les Montagnes de Kazador", "Mortel", "Hivernal");
    this.MontagnesHabivel = new ArlenorSector("Les Montagnes de Habivel", "Mortel", "Tropical");
    this.MerShivazen = new ArlenorSector("La Mer de Shivazen", "Infernal", "Tropical");
  }
}

export function getListSectors(): ArlenorSector[] {
  const arlenorSectors = new ArlenorSectors();
  return Object.values(arlenorSectors);
}
