class FartingCat extends Cat {
  constructor(props){
    props.actions = [
      {id: 'fart', label: 'Fart'}
    ];

    super(props);
  }
}