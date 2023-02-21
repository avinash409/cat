class WalkingCat extends Cat {
  constructor(props){
    props.actions = [
      {id: 'walk', label: 'Walk'},
      {id: 'flip', label: 'Flip'},
      // Task 10.1: Create a reverse walking cat
      // Task 10.2: Stop me
    ];

    super(props);
  }
}
