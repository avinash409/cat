class WalkingCat extends Cat {
  constructor(props){
    props.actions = [
      {id: 'walk', label: 'Walk'},
      {id: 'flip', label: 'Flip'}
    ];

    super(props);
    this.createActions();
  }

  walk = () => {
    this.addClass('walk');
  }

  flip = () => {
    this.toggleClass('flip');
  }

}
