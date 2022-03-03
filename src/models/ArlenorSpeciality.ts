import { ArlenorGroup } from "./ArlenorGroup";

export class ArlenorSpeciality {
  public name: string;
  public image: string;
  public description: string;
  public group: ArlenorGroup;

  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }

  constructor(name: string, group: ArlenorGroup) {
    this.name = name;
    this.image = "";
    this.description = "";
    this.group = group;
  }
}
