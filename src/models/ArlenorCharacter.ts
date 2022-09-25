import { ArlenorAPI } from "./ArlenorAPI";
import { ArlenorCaracts } from "./ArlenorCaracts";
import { ArlenorCrystal } from "./ArlenorCrystal";
import { ArlenorLevel } from "./ArlenorLevel";
import { ArlenorRace } from "./ArlenorRace";
import { ArlenorSkill } from "./ArlenorSkill";
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

  get crystalsSkills(): ArlenorSkill[] {
    const armures = [
      "légères / très mobiles",
      "normales / mobiles",
      "lourdes / peu mobiles",
    ];

    const crystal01 = this.crystals[0];
    let spe01;
    if (crystal01) spe01 = crystal01.speciality;
    if (spe01) spe01.setSkills();

    const crystal02 = this.crystals[1];
    let spe02;
    if (crystal02) spe02 = crystal02.speciality;
    if (spe02) spe02.setSkills();

    const speSkills = [];
    if (spe01) {
      if (spe01.weaponSkill) speSkills.push(spe01.weaponSkill);
      if (spe01.armorSkill) speSkills.push(spe01.armorSkill);
    }
    if (spe02) {
      if (spe02.weaponSkill) {
        if (spe01 && spe01.weaponSkill) {
          if (spe01.weaponSkill.name !== spe02.weaponSkill.name) speSkills.push(spe02.weaponSkill);
        } else speSkills.push(spe02.weaponSkill);
      }
      if (spe02.armorSkill) {
        if (spe01 && spe01.armorSkill) {

          let indexArmor01 = -1;
          if (spe01.armorSkill.name.includes(armures[0])) indexArmor01 = 0;
          else if (spe01.armorSkill.name.includes(armures[1])) indexArmor01 = 1;
          else if (spe01.armorSkill.name.includes(armures[2])) indexArmor01 = 2;

          let indexArmor02 = -1;
          if (spe02.armorSkill.name.includes(armures[0])) indexArmor02 = 0;
          else if (spe02.armorSkill.name.includes(armures[1])) indexArmor02 = 1;
          else if (spe02.armorSkill.name.includes(armures[2])) indexArmor02 = 2;

          // Si ce n'est pas la même armure et qu'elle est plus forte
          if (indexArmor02 > indexArmor01) {
            speSkills[1] = spe02.armorSkill;
          }
        } else speSkills.push(spe02.armorSkill);
      }
    }
    speSkills.sort((a, b) => a.name.localeCompare(b.name));
    return speSkills;
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