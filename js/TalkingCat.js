class TalkingCat extends Cat {
  constructor(props){
    props.actions = [
      {id: 'talk', label: 'Talk'}
    ];

    super(props);
    this.language = props.language;
    this.createActions();
  }

  talk = () => {
    const voice = voices.find(voice => voice.name === "Daniel")

    var msg = new SpeechSynthesisUtterance();
    msg.text = `Hello World, my name is ${this.name}. I am a ${this.constructor.name}`;
    // msg.voice = voice;
    msg.lang = this.language;
    msg.rate = 0.9;
    window.speechSynthesis.speak(msg);
  }
}