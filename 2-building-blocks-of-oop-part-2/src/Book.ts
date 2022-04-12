import { Item } from './Item';
import { Pages } from './Pages';

export class Book extends Item {
    constructor(private _title: string, private _author: string, public pages: Pages) {
        super();
    }

    public get author(): string {
        return this._author;
    }

    public set author(author: string) {
        this._author = author;
    }

    public get title(): string {
        return this.title;
    }

    public set title(title: string) {
        this._title = title;
    }

    public toString(): string {
        return `Book: ${this._title} by ${this._author} with number of pages: ${this.pages.number}`;
    }
}
