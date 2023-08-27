import { ArlenorArchetype } from "./ArlenorArchetype";
import { ArlenorRole } from "./ArlenorRole";

export class ArlenorSpeciality {

  public name: string;
  public color: string;
  public role: ArlenorRole;
  public urlImage: string;
  public description: string;
  public appearance: string;
  public archetype01: ArlenorArchetype | null;
  public archetype02: ArlenorArchetype | null;
  
  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }

  get image(): string {
    const images = require.context("./../assets/icons/specialities/", false, /\.png$/);
    return images("./" + this.urlImage);
  }

  get imageForArchetype(): string {
    const images = require.context("./../assets/icons/archetypes/", false, /\.png$/);
    return images("./" + this.urlImage);
  }

  constructor(name: string, color: string, role: ArlenorRole) {
    this.name = name;
    this.color = color;
    this.role = role;
    this.urlImage = "";
    this.description = "";
    this.appearance = "";
    this.archetype01 = null;
    this.archetype02 = null;
  }
}
