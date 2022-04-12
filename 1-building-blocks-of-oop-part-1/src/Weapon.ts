import { Item } from "./Item";

export abstract class Weapon extends Item {
  static readonly MODIFIER_CHANGE_RATE = 0.5;
  damageModifier: number = Weapon.MODIFIER_CHANGE_RATE;
  durabilityModifier: number = Weapon.MODIFIER_CHANGE_RATE;

  constructor(
    name: string,
    protected baseDamage: number,
    protected baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);
  }

  public abstract polish(): void;

  public use(): string {
    this.setDurabilityModifier(
      this.durabilityModifier - Weapon.MODIFIER_CHANGE_RATE
    );

    return this.getDurability() > 0
      ? `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage. The hammer breaks.`
      : `You can't use the ${this.getName()}, it is broken.`;
  }

  public toString(): string {
    const roundedWeight = Weapon.toRoundToNDecimals(this.getWeight(), 2);
    const roundedDamage = Weapon.toRoundToNDecimals(this.getDamage(), 2);
    const durability = Weapon.toRoundToNDecimals(this.getDurability() * 100, 2);
    return `${this.getName()} − Value: ${this.getValue()}, Weight: ${roundedWeight}, Damage: ${roundedDamage}, Durability: ${durability}%`;
  }

  public getDamage() {
    return this.baseDamage + this.damageModifier;
  }

  public getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  public getDamageModifier() {
    return this.damageModifier;
  }

  public setDamageModifier(modifier: number) {
    this.damageModifier = modifier;
  }

  public getDurabilityModifier() {
    return this.durabilityModifier;
  }

  public setDurabilityModifier(modifier: number) {
    this.durabilityModifier = modifier;
  }

  protected static toRoundToNDecimals(
    number: number,
    roundedDec: number
  ): number {
    return Number(number.toFixed(roundedDec));
  }
}
