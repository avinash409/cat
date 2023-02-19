class PlayingCat extends Cat {
  constructor(props){
    props.actions = [
      {id: 'hide', label: 'Hide & Seek'},
    ];

    super(props);
    this.createActions();
  }
  
  hide = () => {
    this.toggleClass('hide');
  }
}