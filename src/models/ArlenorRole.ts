export class ArlenorRole {
  public name: string;
  public icon: string;

  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }

  constructor(name: string, icon: string) {
    this.name = name;
    this.icon = icon;
  }
}
