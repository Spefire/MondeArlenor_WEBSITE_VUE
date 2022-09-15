import { ArlenorSector } from "../ArlenorSector";

export class ArlenorSectors {
  public PlainesTerfil: ArlenorSector;
  public DesertSanderten: ArlenorSector;
  public ForetImerys: ArlenorSector;
  public ForetMiryden: ArlenorSector;
  public MontagnesKazador: ArlenorSector;
  public MontagnesHabivel: ArlenorSector;
  public MerShivazen: ArlenorSector;
  public CielArlenor: ArlenorSector;

  constructor() {
    this.PlainesTerfil = new ArlenorSector(
      "Les Plaines de Terfil",
      "L'Empire Faradélien",
      "Paisible", "Tempéré");
    this.DesertSanderten = new ArlenorSector(
      "Le Désert de Sanderten",
      "Le Régime Jirakanien",
      "Risqué", "Désertique");
    this.ForetImerys = new ArlenorSector(
      "La Forêt d'Imerys",
      "Une Zone de Non-droit",
      "Risqué", "Tempéré");
    this.ForetMiryden = new ArlenorSector(
      "La Forêt de Miryden",
      "Le Territoire de Nébulys",
      "Mortel", "Tropical");
    this.MontagnesKazador = new ArlenorSector(
      "Les Montagnes de Kazador",
      "Le Royaume de Dakaros",
      "Mortel", "Hivernal");
    this.MontagnesHabivel = new ArlenorSector(
      "Les Montagnes de Habivel",
      "Une Zone de Non-droit",
      "Mortel", "Tropical");
    this.MerShivazen = new ArlenorSector(
      "La Mer de Shivazen",
      "Une Zone de Non-droit",
      "Infernal", "Tropical");
    this.CielArlenor = new ArlenorSector(
      "Le Ciel d'Arlénor",
      "Une Zone inconnue",
      "Risqué", "Tempéré");
  }
}

export function getListSectors(): ArlenorSector[] {
  const arlenorSectors = new ArlenorSectors();
  return Object.values(arlenorSectors);
}
