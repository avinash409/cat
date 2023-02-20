class SuperCat extends Cat {
  constructor(props){
    props.actions = [
      
    ];

    super(props);

    this.addAction({
      label: 'Talk fast'
    }, this.talkFast);

    this.addAction({
      label: '' // add Change color label
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