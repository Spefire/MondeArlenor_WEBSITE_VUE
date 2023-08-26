import { ArlenorEnum } from "./ArlenorEnum";
import { PowerRanksEnum } from "./ArlenorPower";
import { ArlenorSpeciality } from "./ArlenorSpeciality";
import { ArlenorSpecialities } from "./data/ListSpecialities";

export class ArlenorCrystal {
  public codeSpeciality: string | null;
  public idsPowers: { [codeRank: string] : number[]; };

  get speciality(): ArlenorSpeciality | null {
    if (!this.codeSpeciality) return null;
    return ArlenorSpecialities.getSpeciality(this.codeSpeciality);
  }

  constructor() {
    this.codeSpeciality = null;
    this.idsPowers = ArlenorCrystal.resetIdsPowers();
  }

  public static resetIdsPowers(): { [codeRank: string] : number[]; } {
    const idsPowers: { [codeRank: string] : number[]; } = {};
    const allRanks = Object.values(PowerRanksEnum);
    allRanks.forEach((rank: ArlenorEnum) => {
      idsPowers[rank.Code] = [];
    });
    return idsPowers;
  }
}
