import { ArlenorGroup } from "./ArlenorGroup";

export class ArlenorSpeciality {
  public name: string;
  public code: string;
  public image: string;
  public description: string;
  public crystalName: string;
  public group: ArlenorGroup;

  constructor(name: string, code: string, group: ArlenorGroup) {
    this.name = name;
    this.code = code.toUpperCase();
    this.image = "";
    this.description = "";
    this.crystalName = "";
    this.group = group;
  }
}
