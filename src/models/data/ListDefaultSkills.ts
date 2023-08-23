import { CaractNomEnum } from "../ArlenorCaracts";
import { ArlenorSkill, SkillTypesEnum } from "../ArlenorSkill";

export class ArlenorSkills {
  // Armes
  public WeaponBoucliers = createSkill("boucliers", [CaractNomEnum.Force.Code]);
  public WeaponDeuxMains = createSkill("armes à deux mains", [CaractNomEnum.Force.Code]);
  public WeaponMainsNues = createSkill("mains nues", [CaractNomEnum.Force.Code]);
  public WeaponHast = createSkill("armes d'hast", [CaractNomEnum.Habilete.Code]);
  public WeaponDagues = createSkill("dagues / armes de jets", [CaractNomEnum.Habilete.Code]);
  public WeaponArcs = createSkill("arcs / arbalètes", [CaractNomEnum.Habilete.Code]);
  public WeaponSabres = createSkill("sabres", [CaractNomEnum.Habilete.Code]);
  public WeaponAmbidextrie = createSkill("ambidextrie", [CaractNomEnum.Force.Code]);
  public WeaponEpees = createSkill("épées à une main", [CaractNomEnum.Force.Code]);
  public WeaponCatalyseurs = createSkill("catalyseurs", [CaractNomEnum.Intellect.Code]);
  public WeaponBatons = createSkill("bâtons / sceptres", [CaractNomEnum.Habilete.Code]);
  public WeaponMusique = createSkill("instruments de musique", [CaractNomEnum.Intellect.Code]);

  public static getListDefaultSkills(): ArlenorSkill[] {
    const arlenorSpecialities = new ArlenorSkills();
    return Object.values(arlenorSpecialities);
  }
}

function getLibelle(lib: string): string {
  return "Maîtrise (" + lib + ")";
}

function createSkill(name: string, codesCaracts: string[] = []): ArlenorSkill {
  const newSkill= new ArlenorSkill();
  newSkill.init(getLibelle(name), SkillTypesEnum.Weapon);
  newSkill.id = "skill_" + newSkill.code.toLowerCase();
  newSkill.description = "Bonus +4 pour toute action avec.";
  newSkill.codesCaracts = codesCaracts;
  return newSkill;
}
