import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  static readonly DEFAULT_INSTANCE_NAME = "pizza";
  static readonly VALUE = 1;
  static readonly WEIGHT = 0.3;
  private slicesEaten = 0;

  constructor(private numberOfSlices: number, spoiled: boolean) {
    super(Pizza.DEFAULT_INSTANCE_NAME, Pizza.VALUE, Pizza.WEIGHT, spoiled);
  }

  public eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;

      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }

      return "Eat a slice of the pizza.";
    } else {
      return "";
    }
  }
}
