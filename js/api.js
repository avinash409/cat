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

    const props = {
      name,
      color
    };

    switch(type) {
      case 'cat': 
        new Cat(props);
        break;

      // Task 4: Create a sliding cat
      case 'slidingCat':
        new SlidingCat(props);
        break;

      // Task 6: Create a playing cat
      case 'playingCat':
        new PlayingCat(props);
        break;

      // Task 7: Create a talking cat
      case 'talkingCat': 
        new TalkingCat(props);
        break;

      // Task 8: Create a walking cat
      case 'walkingCat':
        new WalkingCat(props);
        break;

      // Task 9: Create a Farting cat
      case 'fartingCat': 
        new FartingCat(props);
        break;

      // Task 10, Challenge: Create a Super cat
      case 'superCat':
        new SuperCat(props);
        break;

      default: break;
    }
  }
}
