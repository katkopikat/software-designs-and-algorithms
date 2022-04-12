import { Item } from './Item';
import { Pages } from './Pages';

export class Magazine extends Item {
    constructor(private _title: string, public pages: Pages) {
        super();
    }

    public get title(): string {
        return this.title;
    }

    public set title(title: string) {
        this._title = title;
    }

    public toString(): string {
        return `Magazine: ${this._title} with number of pages: ${this.pages.number}`;
    }
}
