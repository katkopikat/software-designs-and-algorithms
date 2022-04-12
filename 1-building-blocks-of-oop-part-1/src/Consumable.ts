import { Item } from "./Item";

export abstract class Consumable extends Item {
  private consumed: boolean = false;

  constructor(
    name: string,
    value: number,
    weight: number,
    private spoiled: boolean
  ) {
    super(name, value, weight);
  }

  public abstract eat(): string;

  public use(): string {
    if (!this.consumed) {
      return `You eat the ${this.eat()}. ${
        this.spoiled ? " You feel sick." : ""
      }`;
    } else {
      return `There is nothing left of the ${this.getName()} to consume.`;
    }
  }

  public isConsumed(): boolean {
    return this.consumed;
  }

  public setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  public isSpoiled(): boolean {
    return this.spoiled;
  }

  public toString(): string {
    return super.toString();
  }
}
