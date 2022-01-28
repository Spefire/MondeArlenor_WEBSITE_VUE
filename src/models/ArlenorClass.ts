import { ArlenorGroup } from "./ArlenorGroup";

export class ArlenorClass {
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
    this.image = require("./../assets/icons/class.png");
    this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar justo a facilisis aliquet. In justo libero, tempor a ipsum id, pellentesque semper est. Nam elit ex, pulvinar eu libero nec, sagittis fringilla lorem. Curabitur consequat nulla elit, nec tincidunt risus rhoncus vitae. In hac habitasse platea dictumst.";
    this.group = group;
  }
}
