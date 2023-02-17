const synth = window.speechSynthesis;
const voices = synth.getVoices();

const catContainer = document.querySelector('.cat-container');
const cat = document.getElementById('cat');

const selectedCats = [];

class Cat {
  constructor(props) {
    this.name = props.name;
    this.color = props.color;
    this.catContainerInstance = catContainer.cloneNode(true);
    this.actions = [
      {id: 'meow', label: 'Meow'},
      {id: 'purr', label: 'Purr'},
      {id: 'stop', label: 'Reset'},
      {id: 'hide', label: 'Hide & Seek'},
      {id: 'flip', label: 'Flip'},
      {id: 'slide', label: 'Slide'},
      ...(props.actions || [])
    ];

    this.create();
    this.changeColor();
    
    if(!props.actions) {
      this.createActions();
    }
  }

  changeColor = (color) => {
    const style = document.getElementsByTagName('style')[0];
    style.innerHTML+= `#${this.name} .skin { fill: ${color || this.color} }`;
  }

  create = () => {
    this.catContainerInstance.setAttribute('id', this.name);
    const childNode = document.body.appendChild(this.catContainerInstance);
    
    this.toggleClass('hidden', childNode);
    this.catInstance = childNode.querySelector('.moving-cat');
    
    const catName = childNode.querySelector('.cat-name');
    catName.innerHTML = this.name;

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
      const btnNode = actionNode.cloneNode(true);
    
      btnNode.setAttribute('class', 'action');
      btnNode.setAttribute('id', action.id);
      btnNode.innerHTML = action.label;
    
      this.catContainerInstance.querySelector('.cat-actions').appendChild(btnNode);
    });
    
    this.catContainerInstance.querySelectorAll('button.action').forEach((btn) => {
      const action = btn.getAttribute('id');
      btn.onclick = this[action];
    });
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

  hide = () => {
    this.toggleClass('hide');
  }

  flip = () => {
    this.toggleClass('flip');
  }

  slide = () => {
    this.addClass('slide');
  }
}

class TalkingCat extends Cat {
  constructor(props){
    super(props);
    this.language = props.language;
    this.createActions();
  }

  talk = () => {
    const voice = voices.find(voice => voice.name === "Daniel")

    var msg = new SpeechSynthesisUtterance();
    msg.text = `Hello World, my name is ${this.name}`;
    // msg.voice = voice;
    msg.lang = this.language;
    msg.rate = 0.9;
    window.speechSynthesis.speak(msg);
  }
}

class WalkingCat extends Cat {
  constructor(props){
    super(props);
    this.createActions();
  }

  walk = () => {
    this.addClass('walk');
  }

}

class FartingCat extends Cat {
  constructor(props){
    super(props);
    this.createActions();
  }

  fart = () => {
    const fartAudio = this.catContainerInstance.querySelector('#fart');
    fartAudio.play();
  }
}
  