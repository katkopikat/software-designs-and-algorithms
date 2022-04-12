import { Comparable } from "./Comparable";

let counter = 0;

export abstract class Item implements Comparable<Item> {
  private readonly id: number;
  public numberOfItems: number;

  constructor(
    private name: string,
    private value: number,
    private weight: number
  ) {
    this.id = counter++;
    this.numberOfItems = this.id;
  }

  public abstract use(): void;

  public compareTo(other: Item): number {
    if (this.value === other.value) {
      return this.name.toLowerCase() > other.name.toLowerCase() ? 1 : -1;
    }
    return this.value > other.value ? 1 : -1;
  }

  public toString(): string {
    return `${this.name}  − Value: ${this.value}, Weight: ${this.weight}`;
  }

  public getId(): number {
    return this.id;
  }

  public getValue(): number {
    return this.value;
  }

  public setValue(price: number): void {
    this.value = price;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getWeight(): number {
    return this.weight;
  }

  public setWeight(weight: number): void {
    this.weight = weight;
  }

  public reset(): void {
    counter = 0;
  }
}
