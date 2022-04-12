import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  static readonly DEFAULT_INSTANCE_NAME = "bow";

  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(Bow.DEFAULT_INSTANCE_NAME, baseDamage, baseDurability, value, weight);
  }

  public polish(): void {
    const MAX_EFFECTIVE_DURABILITY = 1;

    const currentDurabilityModifier = this.getDurabilityModifier();
    const increasedDurabilityModifier =
      currentDurabilityModifier + Weapon.MODIFIER_CHANGE_RATE;

    this.setDamageModifier(
      increasedDurabilityModifier < MAX_EFFECTIVE_DURABILITY
        ? increasedDurabilityModifier
        : MAX_EFFECTIVE_DURABILITY
    );
  }
}
