export class ArlenorCelestia {
  public firstname: string;
  public lastname: string;
  public age: number;
  public astro: string;
  public mbti: string;
  public orientation: string;
  public situation: string;
  public relations: string;
  public emotion: string;
  public grade: string;
  public animal: string;
  public image: string;
  public qualities: string[];
  public defaults: string[];
  public comment: string;

  constructor(firstname: string, lastname: string, age: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.astro = "";
    this.mbti = "";
    this.orientation = "";
    this.situation = "";
    this.relations = "";
    this.emotion = "";
    this.grade = "";
    this.animal = "";
    this.image = "";
    this.qualities = [];
    this.defaults = [];
    this.comment = "";
  }
}
