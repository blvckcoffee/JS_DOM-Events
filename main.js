/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

document.getElementById('node1').textContent =
  'I used the getElementById("node1") method to access this.';

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

document.getElementsByClassName('node2').textContent =
  'I used the getElementByClassName("node2") method to access this.';

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

const h3Nodes = document.getElementsByTagName('h3');
for (let node of h3Nodes) {
  node.textContent =
    'I used the getElementsByTagName("h3") method to access all of these.';
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"

const p = document.createElement('p');
p.textContent = 'I am a p element.';

// TODO: Append the created node to the parent node using the element.appendChild() method

const parent = document.getElementById('parent');
parent.appendChild(p);

// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <p> tag"

const a = document.createElement('a');
a.textContent = 'I am a <p> tag';

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

parent.insertBefore(a, p);

// BONUS: Add a link href to the <a>

a.setAttribute('href', 'www.truecoders.io');

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const newP = document.createElement('p');
newP.textContent = 'New Child Node';

// TODO: Remove the "New Child Node"

const exercise3 = document.getElementById('exercise3');
exercise3.replaceChild(newP, document.getElementById('N1'));

/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left

let pos = 0;
const box = document.getElementById('box');
let t = setInterval(move, 10);

function move() {
  if (pos >= 150) {
    clearInterval(t);
  } else {
    pos += 1;
    box.style.left = pos + 'px';
  }
}

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen

function show() {
  let modal = document.createElement('div');
  alert(
    'Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user.'
  );
}

const btn = document.getElementById('btn');
btn.addEventListener('click', show());

// BONUS: The modal popup should be able to be closed. Refactor for this functionality
