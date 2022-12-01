const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);
console.log("");

Array.prototype.forEach.call(categories, (element) => {
    const category = element.querySelector('h2').innerHTML;
    const quantityElem = element.querySelectorAll('li').length;
    console.log(`Category: ${category}`);
    console.log(`Elements: ${quantityElem}`);
    console.log("");
});

// const ul = Array.from(document.querySelector('#categories').children);
// for (let elem of ul) {
//     let category = elem.firstElementChild.textContent;   
//     let quantityElem = elem.lastElementChild.children.length;
//     console.log(`Category: ${category}`);
//     console.log(`Elements: ${quantityElem}`);
//     console.log("");
// };
