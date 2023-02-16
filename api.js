const actions = [
  {name: 'walk', displayName: 'Walk'},
  {name: 'meow', displayName: 'Meow'},
  {name: 'purr', displayName: 'Purr'},
  {name: 'talk', displayName: 'Talk'},
  {name: 'stop', displayName: 'Stop'},
  {name: 'hide', displayName: 'Hide & Seek'},
  {name: 'flip', displayName: 'Flip'},
  {name: 'slide', displayName: 'Slide'},
  {name: 'fart', displayName: 'Fart'}
];

const actionNode = document.querySelector('button.action');
actions.forEach(action => {
  const btnNode = actionNode.cloneNode(true);

  btnNode.setAttribute('class', 'action');
  btnNode.setAttribute('id', action.name);
  btnNode.innerHTML = action.displayName;

  document.querySelector('.cat-actions').appendChild(btnNode);
});

document.querySelectorAll('button.action').forEach((btn) => {
  const action = btn.getAttribute('id');
  btn.onclick = function() {
    actionHandler(action);
  }
});

function actionHandler(action) {
  selectedCats.forEach(cat => {
    cat.cat[action]();
  });
}

function createCat() {
  new Cat({ name: 'Tom', color: '#fce999'});
}
