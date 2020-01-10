export class NPC {
  constructor(
    public name: string,
    public favorite_things: string[],
    public img_src: string,
    public marriable: boolean,
    public answers?: number[]
  ) {}
}