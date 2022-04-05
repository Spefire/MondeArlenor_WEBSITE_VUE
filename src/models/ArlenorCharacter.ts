import { ArlenorEnum } from "./ArlenorEnum";

class ArlenorCaracts {
  public vig: number;
  public hab: number;
  public int: number;
  public cha: number;
  public pou: number;

  get totalCaracts(): number {
    return this.vig
      + this.hab
      + this.int
      + this.cha
      + this.pou;
  }

  constructor() {
    this.vig = 1;
    this.hab = 1;
    this.int = 1;
    this.cha = 1;
    this.pou = 5;
  }
}

export class CaractEnum {
  static Aucune: ArlenorEnum = { Code: "", Libelle: "Aucune" };
  static Vigueur: ArlenorEnum = { Code: "VIG", Libelle: "Vigueur" };
  static Habilete: ArlenorEnum = { Code: "HAB", Libelle: "Habileté" };
  static Intellect: ArlenorEnum = { Code: "INT", Libelle: "Intellect" };
  static Charisme: ArlenorEnum = { Code: "CHA", Libelle: "Charisme" };
  static Pouvoir: ArlenorEnum = { Code: "POU", Libelle: "Pouvoir" };
}

export class ArlenorCharacter {
  public name: string;
  public description: string;
  public avatar: string;
  public race: number;
  public caracts: ArlenorCaracts;
  
  get initiative(): number {
    return this.caracts.hab + this.caracts.int;
  }

  get health01(): number {
    if (this.caracts.vig === 1) {
      return 1;
    } else if (this.caracts.vig === 5) {
      return 3;
    } else {
      return 2;
    }
  }

  get health02(): number {
    return 2;
  }

  get health03(): number {
    if (this.race === 2 || this.race === 5) {
      return 1;
    } else if (this.race === 3 || this.race === 6) {
      return 3;
    } else {
      return 2;
    }
  }

  get health04(): number {
    return 1;
  }

  constructor() {
    this.name = "";
    this.description = "";
    this.avatar = "";
    this.race = 1;
    this.caracts = new ArlenorCaracts();
  }
}