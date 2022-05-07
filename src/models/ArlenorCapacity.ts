import { ArlenorRace } from "./ArlenorRace";
import { getListRaces } from "./data/ListRaces";

export class ArlenorCapacity {
  public name: string;
  public description: string;
  public image: string;
  public race: ArlenorRace;

  get code(): string {
    let code = this.name;
    code = code.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    code = code.replace(/\s/g, "");
    return code.toUpperCase();
  }

  constructor() {
    const races = getListRaces();
    this.name = "";
    this.description = "";
    this.image = "";
    this.race = races[0];
  }
}
