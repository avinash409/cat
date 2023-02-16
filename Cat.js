const synth = window.speechSynthesis;
const catContainer = document.querySelector('.cat-container');
const cat = document.getElementById('cat');
let root = document.documentElement;
const selectedCats = [];

class Cat {
  constructor(props) {
    this.name = props.name;
    this.color = props.color;
    this.catContainerInstance = catContainer.cloneNode(true);

    this.create();
  }

  create() {
    this.catContainerInstance.setAttribute('id', this.name);
    root.style.setProperty('--skin', this.color);

    const childNode = document.body.appendChild(this.catContainerInstance);
    
    this.toggleClass('hidden', childNode);
    this.catInstance = childNode.querySelector('.moving-cat');
    this.catInstance.setAttribute('id', `cat-${this.name}`);

    this.catContainerInstance.onclick = () => {
      this.click();
    };
  }

  click() {
    this.toggleClass('selected', this.catContainerInstance);
    this.setSelectedCats();
  }

  setSelectedCats() {
    const currentIndex = selectedCats.findIndex(cat => cat.id === this.name);

    if(currentIndex > -1) { 
      selectedCats.splice(currentIndex, 1);
    } else {
      selectedCats.push({id: this.name, cat: this});
    }
  }

  addClass(newClass) {
    this.catInstance.setAttribute('class', `moving-cat ${newClass}`);
  }

  toggleClass(className, node=this.catInstance) {
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

  resetClass() {
    this.catInstance.setAttribute('class', `moving-cat`);
  }

  walk() {
    this.addClass('walk');
  }

  talk() {
    const voices = synth.getVoices();
    const voice = voices.find(voice => voice.name === "Daniel")

    var msg = new SpeechSynthesisUtterance();
    msg.text = `Hello World, my name is ${this.name}`;
    // msg.text = 'Bonjour le monde';
    // msg.voice = voice;
    // msg.pitch = 1;
    // msg.lang = "en-IN";
    msg.rate = 0.9;
    window.speechSynthesis.speak(msg);
  }

  fart() {
    const fartAudio = this.catContainerInstance.querySelector('#fart');
    fartAudio.play();
  }

  purr() {
    const purrAudio = this.catContainerInstance.querySelector('#purr');
    purrAudio.play();
  }

  meow() {
    const meowAudio = this.catContainerInstance.querySelector('#meow');
    meowAudio.play();
  }

  stop() {
    this.resetClass();
  }

  hide() {
    this.toggleClass('hide');
  }

  flip() {
    this.toggleClass('flip');
  }

  slide() {
    this.addClass('slide');
  }
  
}

  