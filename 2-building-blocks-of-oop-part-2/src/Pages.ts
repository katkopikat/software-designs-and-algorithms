import { Page } from './Page';

export class Pages {
    constructor(private pages: Page[]) {}

    public get number(): number {
        return this.pages.length;
    }
}
