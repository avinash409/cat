const synth = window.speechSynthesis;
const voices = synth.getVoices();

const catContainer = document.querySelector('.cat-container');
const cat = document.getElementById('cat');

const selectedCats = [];

class Cat {
  constructor(props) {
    // Task 1: Name the cat
    this.name = props.name;

    // Task 2: Color the cat
    this.color = props.color;

    this.actions = [
      // Task 3: Make the cat meow
      {id: 'meow', label: 'Meow'},
      // Task 4: Make the cat purr
      {id: 'purr', label: 'Purr'},
      ...(props.actions || [])
    ];

    this.language = props.language;
    
    this.create();
    this.setColor();
    
    if(this.actions.length) {
      this.createActions();
    }
  }

  setColor = (color) => {
    const style = document.getElementsByTagName('style')[0];
    style.innerHTML+= `#id-${this.timestamp} .skin { fill: ${color || this.color} }`;
  }

  create = () => {
    this.timestamp = new Date().getTime();
    this.catContainerInstance = catContainer.cloneNode(true);

    this.catContainerInstance.setAttribute('id', 'id-'+this.timestamp);
    const childNode = document.body.appendChild(this.catContainerInstance);
    
    this.toggleClass('hidden', childNode);
    this.catInstance = childNode.querySelector('.moving-cat');
    
    const catName = childNode.querySelector('.cat-name');
    catName.innerHTML = this.name || "";

    this.catInstance.setAttribute('id', `cat-${this.name}`);

    // this.catContainerInstance.onclick = this.click;
  }

  click = () => {
    this.toggleClass('selected', this.catContainerInstance);
    this.setSelectedCats();
  }

  setSelectedCats = () => {
    const currentIndex = selectedCats.findIndex(cat => cat.id === this.name);

    if(currentIndex > -1) { 
      selectedCats.splice(currentIndex, 1);
    } else {
      selectedCats.push({id: this.name, cat: this});
    }
  }

  addClass = (newClass) => {
    this.catInstance.setAttribute('class', `moving-cat ${newClass}`);
  }

  toggleClass = (className, node=this.catInstance) => {
    const classes = node.getAttribute('class').split(' ');
  
    const clsIndex = classes.findIndex(cls => cls === className);

    if(clsIndex > -1) {
      // remove class
      classes.splice(clsIndex, 1);
    } else {
      classes.push(className);
    }
    node.setAttribute('class', classes.join(' '));
  }

  resetClass = () => {
    this.catInstance.setAttribute('class', `moving-cat`);
  }

  createActions = () => {
    const actionNode = document.querySelector('button.action');
    this.actions.forEach(action => {

      if(action.id && action.label) {
        const btnNode = actionNode.cloneNode(true);
      
        btnNode.setAttribute('class', 'action');
        btnNode.setAttribute('id', action.id);
        btnNode.innerHTML = action.label;
      
        this.catContainerInstance.querySelector('.cat-actions').appendChild(btnNode);
      }
    });
    
    this.catContainerInstance.querySelectorAll('button.action').forEach((btn) => {
      const action = btn.getAttribute('id');
      btn.onclick = this[action];
    });
  }

  addAction = (action, actionHandler) => {
    if(action.label) {
      const actionNode = document.querySelector('button.action');
      const btnNode = actionNode.cloneNode(true);
      
      btnNode.setAttribute('class', 'action');
      // btnNode.setAttribute('id', action.id);
      btnNode.innerHTML = action.label;
    
      this.catContainerInstance.querySelector('.cat-actions').appendChild(btnNode);
      
      // const btn = this.catContainerInstance.querySelector(`button.action#${action.id}`);
      btnNode.onclick = actionHandler;
    }
  }

  purr = () => {
    const purrAudio = this.catContainerInstance.querySelector('#purr');
    purrAudio.play();
  }

  meow = () => {
    const meowAudio = this.catContainerInstance.querySelector('#meow');
    meowAudio.play();
  }

  stop = () => {
    this.resetClass();
  }

  fart = () => {
    const fartAudio = this.catContainerInstance.querySelector('#fart');
    fartAudio.play();
  }

  talk = (e, rate) => {
    var msg = new SpeechSynthesisUtterance();

    if(this.name) {
      msg.text = `Hello World, my name is ${this.name}. I am a ${this.constructor.name}`;
    } else {
      msg.text = `Hello World, I am a ${this.constructor.name}`;
    }
    msg.lang = this.language;
    msg.rate = rate || 1;
    window.speechSynthesis.speak(msg);
  }

  speedTalk = (rate) => {
    var msg = new SpeechSynthesisUtterance();

    if(this.name) {
      msg.text = `Hello World, my name is ${this.name}. I am a ${this.constructor.name}`;
    } else {
      msg.text = `Hello World, I am a ${this.constructor.name}`;
    }
    msg.lang = this.language;
    msg.rate = rate || 1;
    window.speechSynthesis.speak(msg);
  }

  walk = () => {
    this.addClass('walk');
  }

  flip = () => {
    this.toggleClass('flip');
  }

  slide = () => {
    this.addClass('slide');
  }

  hide = () => {
    this.toggleClass('hide');
  }
}
