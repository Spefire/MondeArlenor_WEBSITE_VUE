export class ArlenorLevel {
  public numLevel: number;
  public hasOtherCrystal: boolean;
  public maxCaracts: number;
  public maxHealth: number;
  public maxSkills: number;
  public maxRankS: number[];
  public maxRankA: number[];
  public maxRankB: number[];
  public maxRankC: number[];

  constructor(level: number) {
    this.numLevel = level;

    // Niveau 1
    this.maxCaracts = 9;
    this.maxHealth = 5;
    this.maxSkills = 5;
    this.hasOtherCrystal = false;
    this.maxRankS = [0, 0];
    this.maxRankA = [0, 0];
    this.maxRankB = [1, 0];
    this.maxRankC = [2, 0];
    
    // Gestion des caractéristiques
    if (level >= 5) this.maxCaracts++;
    if (level >= 10) this.maxCaracts++;
    if (level >= 15) this.maxCaracts++;
    if (level >= 20) this.maxCaracts++;

    // Gestion de la vie max
    this.maxHealth = 5 + Math.floor(level/2);

    // Gestion des compétences
    if (level >= 3) this.maxSkills++;
    if (level >= 9) this.maxSkills++;
    if (level >= 10) this.maxSkills++;
    if (level >= 13) this.maxSkills++;
    if (level >= 19) this.maxSkills++;

    // Gestion des pouvoirs
    if (level >= 5) {
      this.hasOtherCrystal = true;
      this.maxRankC = [2, 2]; // [2, 0] avant
    }
    if (level >= 7) this.maxRankA = [1, 0]; // [0, 0] avant
    if (level >= 10) this.maxRankB = [1, 1]; // [1, 0] avant
    if (level >= 11) this.maxRankC = [3, 2]; // [2, 2] avant
    if (level >= 15) this.maxRankB = [2, 1]; // [1, 1] avant
    if (level >= 17) this.maxRankA = [1, 1]; // [1, 0] avant
    if (level >= 20) this.maxRankA = [2, 1]; // [1, 1] avant

    /*
    Final
    this.maxRankS = [0, 0];
    this.maxRankA = [2, 1];
    this.maxRankB = [2, 1];
    this.maxRankC = [3, 2];
    */
  }
}
