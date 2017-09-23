interface PokemonType {
  url: string;
  name: string;
}

interface PokemonSlotType {
  slot: number;
  type: PokemonType;
}

export class Pokemon {

  public id: number;
  public name: string;
  public height: number;
  public weight: number;
  public slotTypes: Array<PokemonSlotType>;
  public sprites: any;

}
