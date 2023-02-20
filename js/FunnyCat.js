class FunnyCat extends Cat {
  constructor(props){
    props.actions = [
      {id: 'fart', label: 'Play'}
    ];

    super(props);
  }
}