export class ArlenorAPI {
  public id: number;
  public date = "01/01/1990";
  public hour = "00:00";

  constructor() {
    this.id = 0;
    this.initTime();
  }

  public initTime(): void {
    function pad(s: number) { return (s < 10) ? "0" + s : s; }
    const date = new Date();
    const hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
    const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    this.hour = hours + ":" + minutes;
    this.date = [pad(date.getDate()), pad(date.getMonth()+1), date.getFullYear()].join("/");
  }
}