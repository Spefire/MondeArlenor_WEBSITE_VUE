export class ArlenorFaction {
  public isOff: boolean;
  public title: string;
  public description: string;
  public urlImage: string | null;
  public values: string[];
  public location: string;

  // Variables dérivées
  get image(): string | null {
    //if (this.urlImage) {
    const images = require.context("./../assets/images/factions/", false, /\.png$/);
    return images("./faction.png" /*+ this.urlImage */);
    //} else return null;
  }

  constructor(isOff: boolean, title: string, description: string, values: string[], location: string) {
    this.urlImage = "";
    this.isOff = isOff;
    this.title = title;
    this.description = description;
    this.values = values;
    this.location = location;
  }
}
