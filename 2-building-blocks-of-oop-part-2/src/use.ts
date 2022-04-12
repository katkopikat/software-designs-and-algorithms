import { Pages } from './Pages';
import { Page } from './Page';
import { Comics } from './Comics';

let counter = 1;
const comics = new Comics(
    'Spider-Man',
    'Stan Lee',
    'some author',
    new Pages([new Page(1, 'with images', 'glossy paper'), new Page(2, 'with images', 'glossy paper')])
);

for (let page of comics) {
    console.log('ComicsCounter', counter);
    console.log('page', page?.toString());
    counter++;
}
