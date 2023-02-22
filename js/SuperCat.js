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
      label: 'Talk slow'
    }, this.talkFast);

    this.addAction({
      label: 'Flip me'
    }, this.flipMe);

    this.addAction({
      label: 'Fast Flip'
    }, this.flipMeFast);


    this.addAction({
      label: 'revolve'
    }, this.revolve);

    this.addAction({
      label: 'change color' // add Change color label
    }, this.changeColor);
  }

  talkFast = () => {
    this.speedTalk(0.5);
  }

  changeColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.setColor(`#${randomColor}`)
  }

  flipMe = () => {
    this.toggleClass('flips')
  }

  flipMeFast = () => {
    this.toggleClass('flips-fast')
  }

  revolve = () => {
    this.toggleClass('revolve');
  }

}