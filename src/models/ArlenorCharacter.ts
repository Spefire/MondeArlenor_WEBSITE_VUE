import { ArlenorEnum } from "./ArlenorEnum";
import { ArlenorRace } from "./ArlenorRace";

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
  public race: ArlenorRace | null;
  public caracts: ArlenorCaracts;
  
  get initiative(): number {
    return this.caracts.hab + this.caracts.int;
  }

  get healthMax(): number {
    return 10;
  }

  constructor() {
    this.name = "";
    this.description = "";
    this.avatar = "";
    this.race = null;
    this.caracts = new ArlenorCaracts();
  }
}