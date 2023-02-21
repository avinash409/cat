class SuperCat extends Cat {
  constructor(props){
    props.actions = [
      {id: 'hide', label: 'Hide & Seek'},
    {id: 'slide', label: 'Slide'},
    {id: 'talk', label: 'Talk'},
    {id: 'fart', label: 'Fart'},
    {id: 'walk', label: 'Walk'},
    {id: 'flip', label: 'Flip'},
    {id: 'stop', label: 'Stop/Reset'},
    ];

    super(props);

    this.addAction({
      label: 'Talk fast'
    }, this.talkFast);

    this.addAction({
      label: 'change color' // add Change color label
    }, this.changeColor);
  }

  talkFast = () => {
    this.speedTalk(1.5);
  }

  changeColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.setColor(`#${randomColor}`)
  }

}