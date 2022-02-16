import { ArlenorRole } from "./ArlenorRole";

export class ArlenorGroup {
  public name: string;
  public color: string;
  public role: ArlenorRole;
  public image: string;
  public description: string;

  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }

  constructor(name: string, role: ArlenorRole, color: string) {
    this.name = name;
    this.role = role;
    this.color = color;
    this.image = "";
    this.description = "";
  }
}
