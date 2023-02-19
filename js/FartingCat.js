class FartingCat extends Cat {
  constructor(props){
    props.actions = [
      {id: 'fart', label: 'Fart'}
    ];

    super(props);
    this.createActions();
  }

  fart = () => {
    const fartAudio = this.catContainerInstance.querySelector('#fart');
    fartAudio.play();
  }
}