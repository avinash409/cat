class TalkingCat extends Cat {
  constructor(props){
    props.actions = [
      {id: 'talk', label: 'Talk'},
    ];

    super(props);

    // Task 8.2: Make the cat talk fast
    this.addAction({
      label: ''
    }, this.talkFast);

    // Task 8.3: Make the cat talk slow
    this.addAction({
      label: ''
    }, this.talkSlow);
  }

  talkFast = () => {
    this.speedTalk(1.5);
  }

  talkSlow = () => {
    this.speedTalk(0.5);
  }
}