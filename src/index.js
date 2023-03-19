import('./main.scss');
import { items } from './items.js';
import { galeryLists } from './galaryList.js';

const el = document.getElementById('galery');

console.log(items[1].resource);

items.map((item) => el.appendChild(galeryLists(item)));
