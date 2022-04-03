import { ArlenorRole } from "./ArlenorRole";

export class ArlenorGroup {
  public name: string;
  public code: string;
  public color: string;
  public role: ArlenorRole;
  public image: string;
  public description: string;

  constructor(name: string, code: string, role: ArlenorRole, color: string) {
    this.name = name;
    this.code = code.toUpperCase();
    this.role = role;
    this.color = color;
    this.image = "";
    this.description = "";
  }
}
