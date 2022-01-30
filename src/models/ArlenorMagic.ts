export class ArlenorMagic {
  public name: string;
  public image: string;
  public image01?: string;
  public image02?: string;
  public image03?: string;
  public description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.image = "";
    this.image01 = undefined;
    this.image02 = undefined;
    this.image03 = undefined;
    this.description = description;
  }
}
