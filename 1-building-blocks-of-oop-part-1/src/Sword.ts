import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  static readonly DEFAULT_INSTANCE_NAME = "sword";

  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(
      Sword.DEFAULT_INSTANCE_NAME,
      baseDamage,
      baseDurability,
      value,
      weight
    );
  }

  public polish(): void {
    const currentDamageModifier = this.getDamageModifier();
    const increasedDamageModifier =
      currentDamageModifier + Weapon.MODIFIER_CHANGE_RATE;

    const maxDamageModifierIncrease = currentDamageModifier * 0.25;

    this.setDamageModifier(
      increasedDamageModifier >
        currentDamageModifier + maxDamageModifierIncrease
        ? maxDamageModifierIncrease
        : increasedDamageModifier
    );
  }
}
