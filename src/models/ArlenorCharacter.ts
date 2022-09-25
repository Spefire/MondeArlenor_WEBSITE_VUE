import { ArlenorAPI } from "./ArlenorAPI";
import { ArlenorCaracts } from "./ArlenorCaracts";
import { ArlenorCrystal } from "./ArlenorCrystal";
import { ArlenorLevel } from "./ArlenorLevel";
import { ArlenorRace } from "./ArlenorRace";
import { getListRaces } from "./data/ListRaces";
import { ArlenorSpecialities } from "./data/ListSpecialities";

export class ArlenorCharacter extends ArlenorAPI {
  
  public level: ArlenorLevel;
  public avatar: string;
  public name: string;
  public age: number | null;
  public gender: string;
  public story: string;
  public description: string;
  public traits: string;
  public belives: string;
  public importances: string;
  public race: ArlenorRace | null;
  public caracts: ArlenorCaracts;
  public crystals: ArlenorCrystal[];
  public idsSkills: string[];

  get initiative(): number {
    return this.caracts.hab + this.caracts.int;
  }

  get totalCaracts(): number {
    return this.caracts.for
      + this.caracts.hab
      + this.caracts.int
      + this.caracts.ten
      + this.caracts.cha
      + this.caracts.mag;
  }

  get healthMax(): number {
    // TODO : Changer en fonction de la race et des compétences
    return this.level.maxHealth;
  }

  constructor() {
    super();
    this.level = new ArlenorLevel(1);
    this.avatar = "";
    this.name = "";
    this.age = null;
    this.gender = "";
    this.story = "";
    this.description = "";
    this.traits = "";
    this.belives = "";
    this.importances = "";
    this.race = null;
    this.caracts = new ArlenorCaracts();
    this.crystals = [new ArlenorCrystal(), new ArlenorCrystal()];
    this.idsSkills = [];
  }

  public init(): void {
    this.level = new ArlenorLevel(1);
    this.avatar = "";
    this.name = "Jérémy Lécuyer (aka Spefire)";
    this.age = 22;
    this.gender = "Masculin (il)";
    this.story = "Jérémy est un garçon ayant une peur bleue de la mort."
    + " Il a perdu ses parents comme beaucoup de célestiens, lors d'une attaque de Wendigo :"
    + " il a vu la vie les quitter dans leurs yeux, et il espère ne jamais revoir ça."
    + " Quand il a découvert ses pouvoirs, il en a eu peur, peur de ce que cela devait impliquer..."
    + " devoir un jour se battre contre les Wendigos.";
    this.description = "Mince, Jeune, Débordant d'énergie, Souvent en feu";
    this.traits = "Amical, Empathique, Loyal, Coopératif, Protecteur";
    this.belives = "Croit au Destin, et cherche à protéger les plus faibles";
    this.importances = "Son amie Elisa et son copain Zachary";

    const races = getListRaces();
    this.race = races[0];
    this.caracts = new ArlenorCaracts();
    this.caracts.for = 2;
    this.caracts.hab = 3;
    this.caracts.int = 3;
    this.caracts.ten = 1;
    this.caracts.cha = 2;
    this.caracts.mag = 5;

    const specialities = new ArlenorSpecialities();
    const crystal01 = new ArlenorCrystal();
    crystal01.codeSpeciality = specialities.Elementaliste.code;
    const crystal02 = new ArlenorCrystal();
    crystal02.codeSpeciality = specialities.DanseurMartial.code;
    this.crystals = [crystal01, crystal02];
    
    this.idsSkills = [];
  }
}