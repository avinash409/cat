function start() {
  const catForm = document.getElementById('cat-form');
  const baseCat = document.getElementById('base-cat');

  baseCat.setAttribute('class', 'cat hidden')
  
  catForm.setAttribute('class', '');
  catForm.onsubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const formData = new FormData(catForm);
    const type = formData.get('type');
    const name = formData.get('name');
    const color = formData.get('color');

    switch(type) {
      case 'cat': 
        new Cat({ name, color });
        break;
      case 'talkingCat': 
        new TalkingCat({
          name,
          color,
          actions: [
            {id: 'talk', label: 'Talk'}
          ]
        });
        break;
      case 'walkingCat':
        new WalkingCat({
          name,
          color,
          actions: [
            {id: 'walk', label: 'Walk'}
          ]
        });
        break;
      case 'fartingCat': 
        new FartingCat({
          name,
          color,
          actions: [
            {id: 'fart', label: 'Fart'}
          ]
        });
        break;
      default: break;
    }
  }
}
