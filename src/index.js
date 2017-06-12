import './css/style.css';


import { name } from './js/test';

let a = document.createElement('div');
a.innerHTML = name;
document.getElementById('root').appendChild(a);


let b = document.createElement('img');
b.setAttribute('src', 'images/account_icon.png');
document.getElementById('root').appendChild(b);


let c = document.createElement('div');
c.setAttribute('class', 'test');
document.getElementById('root').appendChild(c);



