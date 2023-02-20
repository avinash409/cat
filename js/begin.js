function start(e) {
  const startBtn = document.getElementById('btn-start');
  const catForm = document.getElementById('cat-form');
  const baseCat = document.getElementById('base-cat-container');

  baseCat.setAttribute('class', 'cat hidden')
  startBtn.setAttribute('class', 'hidden')
  
  catForm.setAttribute('class', '');
  catForm.onsubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const formData = new FormData(catForm);
    const type = formData.get('type');
    const name = formData.get('name');
    const color = formData.get('color');

    const props = { name, color };

    switch(type) {
      case 'cat':
        new Cat(props);
        break;

      case 'playingCat':
        // Task 5: Create a playing cat
        break;

      case 'slidingCat':
        // Task 6: Create a sliding cat
        break;

      case 'talkingCat':
        // Task 8: Create a talking cat
        // Task 8.1: Change accent
        break;
      
      case 'funnyCat':
        // Task 9: Create a Funny cat
        break;
      
      case 'walkingCat':
        // Task 10: Create a walking cat
        break;
      
      case 'superCat':
        // Task 11, Challenge: Create a Super cat
        break;

      default: break;
    }
  }
}
