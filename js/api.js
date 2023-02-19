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


      // Task 6: Create a playing cat


      // Task 7: Create a talking cat

      
      // Task 8: Create a Farting cat
      
      
      // Task 9: Create a walking cat
      

      // Task 11, Challenge: Create a Super cat
      

      default: break;
    }
  }
}
