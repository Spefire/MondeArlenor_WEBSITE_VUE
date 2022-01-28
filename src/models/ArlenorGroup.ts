import { ArlenorRole } from "./ArlenorRole";

export class ArlenorGroup {
  public name: string;
  public role: ArlenorRole;
  public image: string;
  public description: string;

  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }

  constructor(name: string, role: ArlenorRole) {
    this.name = name;
    this.role = role;
    this.image = require("./../assets/icons/group.png");
    this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar justo a facilisis aliquet. In justo libero, tempor a ipsum id, pellentesque semper est. Nam elit ex, pulvinar eu libero nec, sagittis fringilla lorem. Curabitur consequat nulla elit, nec tincidunt risus rhoncus vitae. In hac habitasse platea dictumst.";
  }
}
