export class ArlenorFaction {
  public isOff: boolean;
  public title: string;
  public description: string;
  public urlImage: string | null;
  public values: string[];
  public location: string;

  // Variables dérivées
  get image(): string | null {
    if (this.urlImage) {
      const images = require.context("./../assets/images/factions/", false, /\.png$/);
      return images("./" + this.urlImage);
    } else return null;
  }

  constructor(isOff: boolean, urlImage: string, title: string, description: string, values: string[], location: string) {
    this.isOff = isOff;
    this.title = title;
    this.description = description;
    this.urlImage = urlImage;
    this.values = values;
    this.location = location;
  }
}
