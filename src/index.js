// import {pow2 as sqrt, pow3 as cube} from './modules.js'
import { week } from './array.js';

let button = document.querySelector('button');

button.addEventListener('click', function() {
    let ul = document.createElement('ul');
    week.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    })

    document.body.appendChild(ul);
})

// alert('hard works' + math.pow2(2) + math.pow3(2));

// let res = test();
// let res1 = mod.func1();
// let res2 = mod.func2();

// console.log(res, res1, res2);

// const sum = arr.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// console.log(numbers.a + numbers.b + numbers.c);

// console.log(_.chunk(arr, 2));
