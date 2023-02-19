class WalkingCat extends Cat {
  constructor(props){
    props.actions = [
      {id: 'walk', label: 'Walk'},
      // Task 10: Create a reverse walking cat
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
