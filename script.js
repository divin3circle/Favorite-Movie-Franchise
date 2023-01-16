const sec = document.querySelectorAll('section');
console.log(sec)
let v = document.querySelectorAll('.movie4')
console.log(v)
v[0].style.color = 'red'
const div = document.querySelectorAll('.container');
const newDiv = document.createElement('div');
div[0].appendChild(newDiv);
newDiv.innerText = 'The Venus Project';
newDiv.setAttribute('class', 'title');
const movieAlert = document.querySelectorAll('.btn');
console.log(movieAlert[0])
function movieDecription(){
  alert('My Favorite Movie Franchise');
}
movieAlert[0].addEventListner("click", movieDecription);