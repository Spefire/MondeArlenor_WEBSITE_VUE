import { ArlenorSector } from "./ArlenorSector";

export class ArlenorZone {
  public name: string;
  public posTop: number;
  public posLeft: number;
  public image: string;
  public sector: ArlenorSector;
  public description: string;
  public comment: string;
  public commentName: string;

  constructor(name: string, posTop: number, posLeft: number, sector: ArlenorSector, description: string, comment: string, commentName: string) {
    this.name = name;
    this.image = "";
    this.posTop = posTop;
    this.posLeft = posLeft;
    this.sector = sector;
    this.description = description;
    this.comment = comment;
    this.commentName = commentName;
  }
}
