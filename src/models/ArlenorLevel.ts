export class ArlenorLevel {
  public numLevel: number;
  public maxCaracts: number;
  public maxHealth: number;
  public maxRankS: number;
  public maxRankA: number;
  public maxRankB: number;
  public maxRankC: number;

  constructor(value: number) {
    this.numLevel = value;
    this.maxCaracts = 16;
    this.maxHealth = 10;
    this.maxRankS = 0;
    this.maxRankA = 0;
    this.maxRankB = 1;
    this.maxRankC = 3;
  }
}
