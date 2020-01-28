export class Item {
  constructor(
    public name: string,
    public recipe: boolean,
    public gatherable: boolean,
    public info: string,
    public img_url: string,
    public villager_loves: string[],
    public ingredients?: { name: string, amt: number }[],
    public season?: string,
    public search_name?: string,

  ) {
    this.search_name = this.name.split(' ').join('').toLowerCase();
   }
}