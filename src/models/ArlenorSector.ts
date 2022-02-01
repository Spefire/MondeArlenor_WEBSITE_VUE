export class ArlenorSector {
  public name: string;
  public city: string;
  public danger: string;
  public climate: string;
  
  constructor(name: string, city: string, danger: string, climate: string) {
    this.name = name;
    this.city = city;
    this.danger = danger;
    this.climate = climate;
  }
}
