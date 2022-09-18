import { ArlenorEnum } from "./ArlenorEnum";
import { PowerRanksEnum } from "./ArlenorPower";
import { ArlenorSpeciality } from "./ArlenorSpeciality";
import { ArlenorSpecialities } from "./data/ListSpecialities";

export class ArlenorCrystal {
  public codeSpeciality: string | null;
  public idsPowers: { [codeRank: string] : string[]; };

  get speciality(): ArlenorSpeciality | null {
    if (!this.codeSpeciality) return null;
    return ArlenorSpecialities.getSpeciality(this.codeSpeciality);
  }

  constructor() {
    this.codeSpeciality = null;
    this.idsPowers = ArlenorCrystal.resetIdsPowers();
  }

  public static resetIdsPowers(): { [codeRank: string] : string[]; } {
    const idsPowers: { [codeRank: string] : string[]; } = {};
    const allRanks = Object.values(PowerRanksEnum);
    allRanks.forEach((rank: ArlenorEnum) => {
      idsPowers[rank.Code] = [];
    });
    return idsPowers;
  }
}
